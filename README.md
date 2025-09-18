# Portal News theme — Drupal 10 upgrade

Overview
- Upgraded from Drupal 8/9 to Drupal 10.
- Base theme set to core “stable” (info.yml: `base theme: stable`). Do not try to enable it as a normal theme.

Requirements
- Drupal core 10.x, PHP ≥ 8.1, Twig 3.x.
- Clear caches after changes: `drush cr`.

Key changes made
- Removed deprecated Twig tag: `{% spaceless %}` (Twig 3 removed it).
- Removed undefined custom Twig functions not provided in D10:
  - `keep_image(...)`
  - `background_image(...)`
- Fixed various Twig syntax errors (unclosed `set/if/for` blocks).
- Resolved duplicate theme file issue (`portal_news/portal_news/portal_news.theme`).

Views-related notes
- “Unknown function” errors came from custom Twig functions that no longer exist. These were removed.
- Offset TypeError: If you encounter `Cannot assign null to ... ->$offset`, set the View “Pager → Offset” to an integer (e.g., 0).
- Group titles in templates:
  - In `views-view-unformatted*.html.twig`, the `title` variable is provided by the “Unformatted list” style when “Grouping field Nr.1” is set.
  - It is not from SQL; it’s the rendered value of the selected grouping field (e.g., Content: Category).
- Template naming:
  - Views uses machine names, not display labels.
  - Example: `views-view-unformatted--page-post-category.html.twig` targets view id `page_post_category` (hyphens in filename, underscores in machine name) and optionally `--DISPLAY_ID` for a specific display.

Images after removing custom functions
- If a View outputs an `<img>` tag (e.g., `fields.field_image.content`), you can use it directly in markup, or extract its URL for a background image.
- Quick Twig-only background example (works when the field renders an `<img>`):
  ```
  {% set img_src = fields.field_image.content|render|striptags|trim %}
  <div class="hero" style="background-image:url('{{ img_src }}')">
    {{ fields.title.content }}
  </div>
  ```
- Preferred approach: In the View, add the image field a second time and set “Output this field as: URL”, then use that URL directly in Twig:
  ```
  <div class="hero" style="background-image:url('{{ fields.field_image_url.content|trim }}')"></div>
  ```

Development tips
- Enable Twig debug (services file) during development:
  ```
  parameters:
    twig.config:
      debug: true
      auto_reload: true
      cache: false
  ```
- Clear caches after changing templates: `drush cr`.
- Search for old helpers:
  - `grep -R "keep_image\|background_image\|spaceless" -n themes/portal_news`

Known todos
- Review CSS/layout after template simplifications (the original logic relied on custom helpers).
- Validate all Views displays for pager/offset and grouping settings.
- Consider implementing a proper Twig extension if you want to reintroduce removed helpers as D10-compatible PHP code.
