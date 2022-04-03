---
layout: Page
title: About
permalink: /about/
---

<style/>
.columns {
Width: 100%;
}
.column-1, .column-2 {
  width:100%;
}
@media (min-width: 48em) {
  .column-1 {
    width: 30%;
    float:left;
  }
  .column-2 {
    width: 70%;
    float:left;
  }

  .columns {
    content:"";
    display: table;
    clear: both;
  }
}

#about-card {
    text-align: center;
    #author-img{
        text-align: center;
    }
    .about-img {
        width: 150px;
        height: 150px;
        margin-left: 20px;
        border-radius: 50%;
    }
    .about-name {
        margin-top: 20px;
    }
    .about-bio,
    .about-links {
        margin-top: 5px;
    }
    .social-link {

        font-size: 15px;
        padding: 5px;
        margin: 2px;
        text-decoration: none !important;
    }
    #header-nav{
        float: right;
        margin-inline-start: 45px;
    }
    #navigation{
        margin-top:50px;
    }
    .nav-link {
        font-size: 15px !important;

        font-weight: 600;
    }

}

.card {
    margin: 20px !important;
    padding: 20px !important;
}


</style>

<div class="columns">
   <div class="column column-1">
   <div class="card" id="about-card">
     <a>
       <img src="{{site.url}}{{site.baseurl}}/assets/img/{{ site.about.image }}" class="about-img" />
     </a>
     <h1 class="about-name">{{ site.about.name }}</h1>
     <p class="about-bio">{{ site.about.bio }}</p>
     {% if site.about.social.github %} {%- include GithubFollowButton.html -%} {%
     endif %}

     <section class="social">
       <ul>
         {% if site.about.social.twitter %}
           <li><a href="https://twitter.com/{{ site.about.social.twitter }}" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
         {% endif %}
         {% if site.about.social.facebook %}
           <li><a href="https://facebook.com/{{ site.about.social.facebook }}" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
         {% endif %}
         {% if site.about.social.github %}
           <li class="github"><a href="http://github.com/{{site.about.social.github}}" target="_blank"><i class="fa fa-github"></i></a></li>
         {% endif %}
         {% if site.about.social.linkedin %}
           <li class="linkedin"><a href="https://in.linkedin.com/in/{{site.about.social.linkedin}}" target="_blank"><i class="fa fa-linkedin"></i></a></li>
         {% endif %}
         {% if site.about.social.email %}
           <li class="email"><a href="mailto:{{site.about.social.email}}"><i class="fa fa-envelope-o"></i></a></li>
         {% endif %}
       </ul>
     </section>
   </div>
   </div>
   <div class="column column-2">
     <div class="card">
       <h1 class="card-title">About</h1>
       <p>{{ site.about.bio }}</p>
     </div>
  </div>
</div>
