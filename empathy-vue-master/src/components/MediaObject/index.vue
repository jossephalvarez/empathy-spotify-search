<template>
  <div class="media-object">
    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <img
            v-if="coverImg[0]"
            v-lazy="coverImg[0].url"
            :alt="name + '-cover'"
          >
        </div>
        <div class="card_content">
          <h2 class="card_title">
            {{ name }}
          </h2>
          <div v-if="artists">
            <h3 class="card_title">
              Artists:
            </h3>
            <ul>
              <li
                v-for="artist in artists"
                :key="artist.name"
                class="card_text"
              >
                {{ artist.name }}
              </li>
            </ul>
          </div>
          <router-link
            :to="createUrl()"
            class="media-object__cover"
            tag="div"
          >
            <button class="btn card_btn">
              View More
            </button>
          </router-link>
        </div>
      </div>
    </li>
  </div>
</template>

<script>

    export default {
        name: "MediaObject",

        props: {
            id: {
                required: true
            },
            uri: {
                required: true
            },
            coverImg: {
                required: true
            },
            name: {
                type: String,
                required: true
            },
            type: {
                required: true
            },
            artists: {
                required: false
            }
        },
        methods: {
            createUrl() {
                const chunks = this.uri.split(":");
                let url = null;

                switch (this.type) {
                    case "album":
                        url = {name: "album", params: {id: this.id}};
                        break;

                    case "artist":
                        url = {name: "artist", params: {id: this.id}};
                        break;

                    case "playlist":
                        url = {
                            name: "playlist",
                            params: {
                                user_id: chunks[2],
                                playlist_id: chunks[chunks.length - 1]
                            }
                        };
                        break;
                }

                return url;
            },
        }
    };
</script>

<style lang="sass" scoped>
    .cards_item
        display: flex
        padding: 1rem

        @media (min-width &: 40rem)
            cards_item
                width: 50%

        @media (min-width &: 56rem)
            cards_item
                width: 33.3333%

        .card
            background-color: $c-black
            border-radius: 0.25rem
            box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25)
            display: flex
            flex-direction: column
            overflow: hidden

        .card_content
            padding: 1rem
            background: $c-gradient

        .card_title
            color: $c-black
            font-size: 1.1rem
            font-weight: 700
            letter-spacing: 1px
            text-transform: capitalize
            margin: 0px

        .card_text
            color: $c-black
            font-size: 0.875rem
            line-height: 1.5
            margin-bottom: 1.25rem
            font-weight: 400

        img
          max-width: 100%
          vertical-align: middle
          height: 20rem
          width: 30rem

        .btn
            color: $c-black
            padding: 0.8rem
            font-size: 14px
            text-transform: uppercase
            border-radius: 4px
            font-weight: 400
            display: block
            width: 100%
            cursor: pointer
            border: 1px solid $c-black
            background: transparent

            &:hover
                background-color: rgba(255, 255, 255, 0.12)

</style>
