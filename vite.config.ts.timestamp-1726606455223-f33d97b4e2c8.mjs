// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/project/vehicles-shop/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/project/vehicles-shop/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///D:/project/vehicles-shop/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/project/vehicles-shop/vite.config.ts";
var vite_config_default = defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import './src/app/assets/scss/_functions.scss';
          @import './src/app/assets/scss/_variables.scss';
          @import './src/app/assets/scss/_mixins.scss';
          `
      }
    }
  },
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "@app": fileURLToPath(new URL("./src/app", __vite_injected_original_import_meta_url)),
      "@pages": fileURLToPath(new URL("./src/pages", __vite_injected_original_import_meta_url)),
      "@widgets": fileURLToPath(new URL("./src/widgets", __vite_injected_original_import_meta_url)),
      "@features": fileURLToPath(new URL("./src/features", __vite_injected_original_import_meta_url)),
      "@entities": fileURLToPath(new URL("./src/entities", __vite_injected_original_import_meta_url)),
      "@shared": fileURLToPath(new URL("./src/shared", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0XFxcXHZlaGljbGVzLXNob3BcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RcXFxcdmVoaWNsZXMtc2hvcFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdC92ZWhpY2xlcy1zaG9wL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBzY3NzOiB7XG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgXG4gICAgICAgICAgQGltcG9ydCAnLi9zcmMvYXBwL2Fzc2V0cy9zY3NzL19mdW5jdGlvbnMuc2Nzcyc7XG4gICAgICAgICAgQGltcG9ydCAnLi9zcmMvYXBwL2Fzc2V0cy9zY3NzL192YXJpYWJsZXMuc2Nzcyc7XG4gICAgICAgICAgQGltcG9ydCAnLi9zcmMvYXBwL2Fzc2V0cy9zY3NzL19taXhpbnMuc2Nzcyc7XG4gICAgICAgICAgYFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcGx1Z2luczogW3Z1ZSgpLCB2dWVEZXZUb29scygpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICdAYXBwJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9hcHAnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICdAcGFnZXMnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjL3BhZ2VzJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAnQHdpZGdldHMnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjL3dpZGdldHMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICdAZmVhdHVyZXMnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjL2ZlYXR1cmVzJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAnQGVudGl0aWVzJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9lbnRpdGllcycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgJ0BzaGFyZWQnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjL3NoYXJlZCcsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnUSxTQUFTLGVBQWUsV0FBVztBQUVuUyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFKcUksSUFBTSwyQ0FBMkM7QUFPOU0sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztBQUFBLEVBQzlCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsTUFDcEQsUUFBUSxjQUFjLElBQUksSUFBSSxhQUFhLHdDQUFlLENBQUM7QUFBQSxNQUMzRCxVQUFVLGNBQWMsSUFBSSxJQUFJLGVBQWUsd0NBQWUsQ0FBQztBQUFBLE1BQy9ELFlBQVksY0FBYyxJQUFJLElBQUksaUJBQWlCLHdDQUFlLENBQUM7QUFBQSxNQUNuRSxhQUFhLGNBQWMsSUFBSSxJQUFJLGtCQUFrQix3Q0FBZSxDQUFDO0FBQUEsTUFDckUsYUFBYSxjQUFjLElBQUksSUFBSSxrQkFBa0Isd0NBQWUsQ0FBQztBQUFBLE1BQ3JFLFdBQVcsY0FBYyxJQUFJLElBQUksZ0JBQWdCLHdDQUFlLENBQUM7QUFBQSxJQUNuRTtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
