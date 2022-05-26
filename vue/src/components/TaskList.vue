<template>
  <v-container>
      <v-card
          class="mx-auto"
          min-width="900"
      >
        <v-toolbar
            color="grey"
            dark
        >
          <v-toolbar-title>Tasks</v-toolbar-title>
        </v-toolbar>

        <v-list two-line>
          <v-list-item-group
              active-class="primary--text"
              multiple
          >
            <template v-for="(item, index) in items">
              <v-list-item :key="item.title">
                <template>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>

                    <v-list-item-subtitle
                        class="text--pink"
                        v-text="item.headline"
                    ></v-list-item-subtitle>

                    <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-icon
                        color="grey lighten-1"
                    >
                      mdi-check
                    </v-icon>
<!--                    special-->
                    <v-icon
                        v-if="!item.active"
                        color="grey lighten-1"
                    >
                      mdi-star-outline
                    </v-icon>
                    <v-icon
                        v-else
                        color="yellow darken-3"
                    >
                      mdi-star
                    </v-icon>
                  </v-list-item-action>
                </template>
              </v-list-item>

              <v-divider
                  v-if="index < items.length - 1"
                  :key="index"
              ></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
      </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'TaskList',
  data: () => ({
    items: [
      {title: 'hello', headline: 'ama headline', subtitle: 'ama subtitle', active: true},
      {title: 'bye', headline: 'ama headline', subtitle: 'ama subtitle', active: false},
      {title: 'ahoj', headline: 'ama headline', subtitle: 'ama subtitle', active: true}
    ]
  }),
}
</script>

<style></style>
