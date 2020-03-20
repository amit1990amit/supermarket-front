<template>
  <div class="footer">
    <p>Copyright © 2019 by IDK. All rights reserved.</p>
    <img src="../img/logo-white.png" />
    <social-sharing
      class="social-icons"
      url="https://vuejs.org/"
      title="The Progressive JavaScript Framework"
      description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
      quote="Vue is a progressive framework for building user interfaces."
      hashtags="vuejs,javascript,framework"
      twitter-user="vuejs"
      inline-template
    >
      <div>
        <network network="facebook">
          <i class="fa fa-facebook-square"></i>
        </network>
        <network network="googleplus">
          <i class="fa fa-google-plus-square"></i>
        </network>
        <network network="whatsapp">
          <i class="fa fa-whatsapp"></i>
        </network>
      </div>
    </social-sharing>
  </div>
</template>