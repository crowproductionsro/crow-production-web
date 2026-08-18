var BlogPreview = createClass({
  render: function () {
    var entry = this.props.entry;
    var data = entry.get('data');
    var title = data.get('title') || 'Názov článku';
    var body = data.get('body') || '';
    var coverImage = data.get('cover_image');
    var coverAlt = data.get('cover_image_alt') || title;
    var category = data.get('category');
    var subcategory = data.get('subcategory');
    var gallery = data.get('gallery');

    var wordCount = body.trim().length ? body.trim().split(/\s+/).length : 0;
    var readingTime = Math.max(1, Math.round(wordCount / 200));

    var children = [
      h('a', { key: 'back', className: 'back-link' }, '← Späť na blog')
    ];

    if (category) {
      children.push(
        h('span', { key: 'cat', className: 'project-tag-single' },
          subcategory ? category + ' · ' + subcategory : category
        )
      );
    }

    children.push(h('h1', { key: 'title' }, title));

    children.push(
      h('div', { key: 'meta', className: 'article-meta' },
        h('span', {}, readingTime + ' min čítania')
      )
    );

    if (coverImage) {
      children.push(
        h('img', {
          key: 'cover',
          className: 'article-cover',
          src: this.props.getAsset(coverImage).toString(),
          alt: coverAlt
        })
      );
    }

    children.push(
      h('div', { key: 'body', className: 'article-body' }, this.props.widgetFor('body'))
    );

    if (gallery && gallery.size) {
      var getAsset = this.props.getAsset;
      var galleryItems = gallery
        .map(function (item, i) {
          var img = item.get('image');
          if (!img) return null;
          return h('img', {
            key: 'g' + i,
            src: getAsset(img).toString(),
            alt: item.get('alt') || '',
            className: 'gallery-img'
          });
        })
        .filter(Boolean)
        .toArray();

      if (galleryItems.length) {
        children.push(
          h('div', { key: 'gallery', className: 'article-gallery' }, galleryItems)
        );
      }
    }

    return h('div', { className: 'article-section' },
      h('div', { className: 'container article-wrap' }, children)
    );
  }
});

CMS.registerPreviewTemplate('blog', BlogPreview);
CMS.registerPreviewStyle('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;500;600;700&display=swap');
CMS.registerPreviewStyle('/css/style.css');
