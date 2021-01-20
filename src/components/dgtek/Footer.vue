<template>
  <v-container>
    <v-row class="mx-auto">
      <v-col cols="12" xl="10" class="mx-auto">
        <v-row>
          <v-col cols="12" lg="4">
            <v-card flat class="transparent mx-auto">
              <v-card-actions>
                <Logo />
                <!-- <v-img src="@/assets/logo.png" width="80" height="52" contain position="left center" style="margin-left: 8px;"></v-img> -->
              </v-card-actions>
              <v-card-title>
                <h6>About us</h6>
              </v-card-title>
              <v-card-text>
                <p>
                  DGtek is a registered Australia Telecommunications Infrastructure Carrier that designs, builds, operates and maintains high-speed Optical Fibre Networks.
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="2">
            <v-card flat class="transparent mx-auto">
              <v-card-title>
                <h6>Company</h6>
              </v-card-title>
              <v-card-text>
                <p><a href="https://dgtek.net/products" target="_blank">Products</a></p>
                <p><a href="https://dgtek.net" target="_blank">About Us</a></p>
                <p><a href="https://dgtek.net/blog/dgtek-in-media" target="_blank">Dgtek in Media</a></p>
                <p><a href="https://dgtek.net/blog" target="_blank">Blog</a></p>
                <p><a href="https://dgtek.net" target="_blank">FAQ</a></p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="2">
            <v-card flat class="transparent mx-auto">
              <v-card-title>
                <h6>Products</h6>
              </v-card-title>
              <v-card-text>
                <p><a href="https://dgtek.net/products/residential-internet" target="_blank">Residential Internet</a></p>
                <p><a href="https://dgtek.net/products/commercial-internet" target="_blank">Commercial Internet</a></p>
                <p><a href="https://dgtek.net/products/dedicated-services" target="_blank">Lit/dark fibre</a></p>
                <p><a href="https://dgtek.net/products/developers" target="_blank">Developers/greenfield</a></p>
                <p><a href="https://dgtek.net/products/owners-corporations" target="_blank">OCs&body corporates</a></p>
                <p><a href="https://dgtek.net/products/social-responsibility" target="_blank">Free internet for not-for-profit</a></p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="2">
            <v-card flat class="transparent mx-auto">
              <v-card-title>
                <h6>Client</h6>
              </v-card-title>
              <v-card-text>
                <p>Website Disclaimer</p>
                <p>Terms & Conditions</p>
                <p>DGTek Privacy Policy</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="2">
            <v-card flat class="transparent mx-auto">
              <v-card-title>
                <h6>Contacts</h6>
              </v-card-title>
              <v-card-text>
                <p>Phone:
                  <a :href="`tel:${phone}`">{{ phone }}</a>
                </p>
                <p>Email:
                  <a :href="email">info@dgtek.net</a>
                </p>
                <p>
                  <a :href="facebook" target="_blank">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                    </svg>
                    <!-- <v-icon color="000">mdi-facebook</v-icon> -->
                  </a>
                  <a :href="instagram" target="_blank">
                    <!-- <v-icon>mdi-instagram</v-icon> -->
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                    </svg>
                  </a>
                  <a :href="linkedin" target="_blank">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                    </svg>
                    <!-- <v-icon>mdi-linkedin</v-icon> -->
                  </a>
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <hr />
    <v-row class="mx-auto">
      <p style="width: 100%; text-align: center;">2019 © DGtek Pty. Ltd. ABN {{ abn }}</p>
    </v-row>
  </v-container>
</template>

<style scoped>
h6, p {
  font-family: 'Gilroy';
  font-style: normal;
}
h6 {
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #000;
}
p {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #757575;
}
a {
  text-decoration: none;
  color: #757575!important;
  display: inline-block;
  margin-right: 10px;
}
</style>

<script>

const { Logo } = require('@/components/dgtek/icons').default

export default {
  name: 'Footer',
  components: {
    Logo
  },
  props: ['viewport'],
  data: () => ({
    linkedin: 'https://www.linkedin.com/company/dgtek/',
    facebook: 'https://www.facebook.com/ISPDGtek/',
    instagram: 'https://www.picuki.com/tag/DGTEK',
    email: 'mailto:info@dgtek.net',
    phone: '1800 359 602',
    abn: '61 600 896 115'
  })
}
</script>
