<!DOCTYPE html>
<html lang="en">
{% include _meta.html %}
  <body class="<%= current.source %> regular">
    {% include _google_tag_manager.html %}
    {% include _header.html %}


    <div class="page-wrapper">
      <div class="container">
         <div class="row">
            <div class="content documentation col-md-7">
              {{content}}
            </div>

            <div class="doc-sidebar col-md-4 col-md-offset-1">
              
              {% include _popular_topics.html %}

              <h3>Video Tutorials</h3>
              <ul class="pm-video-list">
                {% for vid in site.data.video_tutorials %}
                <li>
                  <a href="https://www.youtube.com/watch?v={{vid.id}}&list=PLM-7VG-sgbtCJYpjQfmLCcJZ6Yd74oytQ&autoplay=1" target="_blank">{{vid.title}}</a>
                  <a class="pm-yt-thumbnail" href="https://www.youtube.com/watch?v={{vid.id}}&list=PLM-7VG-sgbtCJYpjQfmLCcJZ6Yd74oytQ&autoplay=1" target="_blank">
                    <img src="https://img.youtube.com/vi/{{vid.id}}/mqdefault.jpg">
                  </a>
                </li>
                {% endfor %}
                <li><a href="https://www.youtube.com/playlist?list=PLM-7VG-sgbtCJYpjQfmLCcJZ6Yd74oytQ">Watch Tutorial Playlist</a></li>
              </ul>
            </div>
          </div>
      </div>
    </div>

    {% include _footer.html %}
    {% include _navigation.html %}
    {% include _footer_scripts.html %}
    {% include _search.html %}
  </body>
</html>
