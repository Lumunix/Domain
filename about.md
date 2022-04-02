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

#profile-card {
    text-align: center;
    #author-img{
        text-align: center;
    }
    .profile-img {
        width: 150px;
        height: 150px;
        margin-left: 20px;
        border-radius: 50%;
    }
    .profile-name {
        margin-top: 20px;
    }
    .profile-bio,
    .profile-links {
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

/* Github Follow Button */
.widget-lg .btn, .widget-lg .social-count {
   height: 35px !important;
   padding: 10px 30px 1px !important;
   font-size: 15px !important;
   line-height: 20px !important;
}
</style>

<div class="columns">
   <div class="column column-1">
   <div class="card" id="profile-card">
     <a>
       <img src="{{site.url}}{{site.baseurl}}/assets/img/{{ site.user.image }}" class="profile-img" />
     </a>
     <h1 class="profile-name">{{ site.user.name }}</h1>
     <p class="profile-bio">{{ site.user.about }}</p>
     {% if site.user.social.github %} {%- include GithubFollowButton.html -%} {%
     endif %}

     <section class="social">
       <ul>
         {% if site.user.social.twitter %}
           <li><a href="https://twitter.com/{{ site.user.social.twitter }}" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
         {% endif %}
         {% if site.user.social.facebook %}
           <li><a href="https://facebook.com/{{ site.user.social.facebook }}" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
         {% endif %}
         {% if site.user.social.github %}
           <li class="github"><a href="http://github.com/{{site.user.social.github}}" target="_blank"><i class="fa fa-github"></i></a></li>
         {% endif %}
         {% if site.user.social.linkedin %}
           <li class="linkedin"><a href="https://in.linkedin.com/in/{{site.user.social.linkedin}}" target="_blank"><i class="fa fa-linkedin"></i></a></li>
         {% endif %}
         {% if site.user.social.email %}
           <li class="email"><a href="mailto:{{site.user.social.email}}"><i class="fa fa-envelope-o"></i></a></li>
         {% endif %}
       </ul>
     </section>
   </div>
   </div>
   <div class="column column-2">
     <div class="card">
       <h1 class="card-title">About</h1>
       <p>{{ site.user.about }}</p>
     </div>
  </div>
</div>
