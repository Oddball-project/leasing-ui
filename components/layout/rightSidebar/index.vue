<script>
import simplebar from "simplebar-vue";
import { useLayoutStore } from "~/stores/layout";
import { setAttribute } from "~/app/utils.js";
import VerticalComponent from "@/components/layout/rightSidebar/VerticalComponent.vue";
import HorizontalComponent from "@/components/layout/rightSidebar/HorizontalComponent.vue";
import TwoColumComponent from "@/components/layout/rightSidebar/TwoColComponent.vue";
import {
  layoutThemeTypes,
  layoutSideBarImages
} from "@/components/layout/rightSidebar/utils.js";
/**
 * Right sidebar component
 */
export default {
  components: {
    simplebar,
    VerticalComponent,
    HorizontalComponent,
    TwoColumComponent
  },
  data() {
    return {
      preloaderEnable: true,
      offcanvasModel: false,
      config: {
        handler: this.handleRightBarClick,
        middleware: this.middleware,
        events: ["click"]
      },
      layoutStore: useLayoutStore(),
      layoutThemeTypes,
      layoutSideBarImages
    };
  },
  mounted() {
    const windowWidth = document.documentElement.clientWidth;
    if (windowWidth > 767) {
      this.offcanvasModel = true;
    }
    this.initBackToTopBtn();
    this.initGradientSideBar();
    window.addEventListener("resize", this.resizeWindow);
  },
  computed: {
    layoutType: {
      get() {
        return this.layoutStore.layoutType;
      },
      set(layout) {
        this.layoutStore.changeLayoutType(layout);
        localStorage.setItem("rmenu", layout);
        setAttribute("data-layout", layout);
        this.offcanvasModel = true;
        document.querySelector(".hamburger-icon").classList.remove("open");
      }
    },
    isVertical() {
      return this.layoutType === "vertical";
    },
    isHorizontal() {
      return this.layoutType === "horizontal";
    },
    isTwoColumn() {
      return this.layoutType === "twocolumn";
    },
    layoutWidth: {
      get() {
        return this.layoutStore.layoutWidth;
      },
      set(width) {
        if (width == "boxed") {
          this.layoutStore.changeSidebarSize("sm-hover");
          this.layoutStore.changeLayoutWidth(width);
        } else {
          this.layoutStore.changeSidebarSize("lg");
          this.layoutStore.changeLayoutWidth(width);
        }
        setAttribute("data-layout-width", width);
      }
    },
    topbar: {
      get() {
        return this.layoutStore.topbar;
      },
      set(topbar) {
        this.layoutStore.changeTopbar(topbar);
        setAttribute("data-topbar", topbar);
      }
    },
    sidebarSize: {
      get() {
        return this.layoutStore.sidebarSize;
      },
      set(size) {
        this.layoutStore.changeSidebarSize(size);
        setAttribute("data-sidebar-size", size);
      }
    },
    position: {
      get() {
        return this.layoutStore.position;
      },
      set(position) {
        this.layoutStore.changePosition(position);
        setAttribute("data-layout-position", position);
      }
    },
    sidebarView: {
      get() {
        return this.layoutStore.sidebarView;
      },
      set(sidebarView) {
        this.layoutStore.changeSidebarView(sidebarView);
        setAttribute("data-layout-style", sidebarView);
      }
    },
    sidebarColor: {
      get() {
        return this.layoutStore.sidebarColor;
      },
      set(sidebarColor) {
        this.layoutStore.changeSidebarColor(sidebarColor);
        setAttribute("data-sidebar", sidebarColor);
      }
    },
    sidebarImage: {
      get() {
        return this.layoutStore.sidebarImage;
      },
      set(sidebarImage) {
        this.layoutStore.changeSidebarImage(sidebarImage);
        setAttribute("data-sidebar-image", sidebarImage);
      }
    },
    preloader: {
      get() {
        return this.layoutStore.preloader;
      },
      set(preloader) {
        this.layoutStore.changePreloader(preloader);
        setAttribute("data-preloader", preloader);
        localStorage.setItem("data-preloader", preloader);
      }
    },
    mode: {
      get() {
        return this.layoutStore.mode;
      },
      set(mode) {
        this.layoutStore.changeTopbar(mode);
        this.layoutStore.changeMode(mode);
        setAttribute("data-bs-theme", mode);
        setAttribute("data-topbar", mode);
      }
    },
    layoutThemes: {
      get() {
        return this.layoutStore.layoutTheme;
      },
      set(layoutTheme) {
        if (layoutTheme == "minimal") {
          this.layoutStore.changeSidebarColor("light");
          setAttribute("data-sidebar", "light");
        } else {
          this.layoutStore.changeSidebarColor("dark");
          setAttribute("data-sidebar", "dark");
        }
        this.layoutStore.changeThemes(layoutTheme);
        setAttribute("data-theme", layoutTheme);
      }
    }
  },

  methods: {
    handleRightBarClick() {
      this.$parent.hideRightSidebar();
    },
    middleware(event) {
      if (event.target.classList)
        return !event.target.classList.contains("toggle-right");
    },
    resetLayout() {
      location.reload();
    },

    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },

    resizeWindow() {
      const windowSize = document.documentElement.clientWidth;
      const layout = document.documentElement.getAttribute("data-layout");
      const hamburgerIconEle = document.querySelector(".hamburger-icon");
      if (windowSize >= 1025) {
        if (layout === "vertical" || layout === "semibox") {
          setAttribute("data-sidebar-size", this.layoutStore.sidebarSize);
        }
      } else if (windowSize < 1025 && windowSize > 767) {
        document.body.classList.remove("twocolumn-panel");
        if (layout === "semibox") {
          setAttribute("data-sidebar-size", "sm");
        }
        if (hamburgerIconEle) {
          hamburgerIconEle.classList.add("open");
        }
      } else if (windowSize <= 767) {
        document.body.classList.remove("vertical-sidebar-enable");
        document.body.classList.add("twocolumn-panel");
        if (layout !== "horizontal") {
          setAttribute("data-sidebar-size", "lg");
        }
        if (hamburgerIconEle) {
          hamburgerIconEle.classList.add("open");
        }
      }
    },
    initBackToTopBtn() {
      const backToTop = document.getElementById("back-to-top");
      if (backToTop) {
        window.onscroll = function () {
          if (
            document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100
          ) {
            backToTop.style.display = "block";
          } else {
            backToTop.style.display = "none";
          }
        };
      }
    },
    initGradientSideBar() {
      const collapseBgGradientEle =
        document.getElementById("collapseBgGradient");
      const collapseBgGradientTarget = document.querySelector(
        "[data-bs-target='#collapseBgGradient']"
      );
      if (collapseBgGradientEle) {
        const collapseBgGradientInputElements = document.querySelectorAll(
          "#collapseBgGradient .form-check input"
        );

        Array.from(collapseBgGradientInputElements).forEach(function () {
          if (collapseBgGradientTarget) {
            collapseBgGradientTarget.addEventListener("click", function () {
              document.getElementById("sidebar-color-gradient").click();
            });
          }
        });
      }

      const sidebarElements = document.querySelectorAll(
        "[name='data-sidebar']"
      );
      const isCollapseBgGradientCheckedInput = document.querySelector(
        "#collapseBgGradient .form-check input:checked"
      );
      Array.from(sidebarElements).forEach(function (elem) {
        if (collapseBgGradientTarget) {
          if (isCollapseBgGradientCheckedInput) {
            collapseBgGradientTarget.classList.add("active");
          } else {
            collapseBgGradientTarget.classList.remove("active");
            collapseBgGradientEle?.classList.remove("show");
          }

          elem.addEventListener("change", function () {
            if (
              document.querySelector(
                "#collapseBgGradient .form-check input:checked"
              )
            ) {
              collapseBgGradientTarget.classList.add("active");
            } else {
              collapseBgGradientEle?.classList.remove("show");
              collapseBgGradientTarget.classList.remove("active");
            }
          });
        }
      });
    }
  }
};
</script>

<template>
  <div>
    <BButton
      variant="dark"
      @click="topFunction"
      class="btn-icon"
      id="back-to-top"
    >
      <i class="bi bi-caret-up fs-3xl"></i>
    </BButton>

    <!--preloader-->
    <!-- <div id="preloader" v-if="preloaderEnable" style="opacity: 1; visibility:visible">
      <div id="status">
        <div class="spinner-border text-primary avatar-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div> -->

    <!-- <div id="preloader">
      <div id="status">
        <div class="spinner-border text-primary avatar-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div> -->

    <div class="customizer-setting d-none d-md-block">
      <BButton
        class="btn btn-info p-2 text-uppercase rounded-end-0 shadow-lg"
        data-bs-toggle="offcanvas"
        data-bs-target="#theme-settings-offcanvas"
        aria-controls="theme-settings-offcanvas"
        id="mdi-cog"
        @click="offcanvasModel = true"
      >
        <i class="bi bi-gear mb-1"></i> Customizer
      </BButton>
    </div>
    <BOffcanvas
      v-model="offcanvasModel"
      placement="end"
      class="border-0 theme-settings-offcanvas"
      tabindex="-1"
      noHeader
      body-class="p-0"
      id="theme-settings-offcanvas"
    >
      <div
        class="d-flex align-items-center bg-primary bg-gradient p-3 offcanvas-header"
      >
        <div class="me-2">
          <h5 class="mb-1 text-white">Steex Builder</h5>
          <p class="text-white text-opacity-75 mb-0">
            Choose your themes & layouts etc.
          </p>
        </div>

        <BButton
          type="button"
          variant="none"
          class="btn-close btn-close-white ms-auto"
          id="customizerclose-btn"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          @click="offcanvasModel = false"
        ></BButton>
      </div>
      <div class="offcanvas-body p-0">
        <simplebar
          data-simplebar
          class="h-100"
          style="max-height: calc(100dvh - 150px)"
        >
          <div class="p-4">
            <h6 class="fs-md mb-1">Layout</h6>
            <p class="text-muted fs-sm">Choose your layout</p>

            <BRow>
              <BCol cols="4">
                <div class="form-check card-radio">
                  <input
                    v-model="layoutType"
                    id="customizer-layout01"
                    name="data-layout"
                    type="radio"
                    value="vertical"
                    class="form-check-input"
                  />
                  <VerticalComponent for="customizer-layout01" />
                </div>
                <h5 class="fs-sm text-center fw-medium mt-2">Vertical</h5>
              </BCol>
              <BCol cols="4">
                <div class="form-check card-radio">
                  <input
                    v-model="layoutType"
                    id="customizer-layout02"
                    name="data-layout"
                    type="radio"
                    value="horizontal"
                    class="form-check-input"
                  />
                  <HorizontalComponent />
                </div>
                <h5 class="fs-sm text-center fw-medium mt-2">Horizontal</h5>
              </BCol>
              <BCol cols="4">
                <div class="form-check card-radio">
                  <input
                    id="customizer-layout03"
                    name="data-layout"
                    type="radio"
                    value="twocolumn"
                    class="form-check-input"
                    v-model="layoutType"
                  />
                  <TwoColumComponent />
                </div>
                <h5 class="fs-sm text-center fw-medium mt-2">Two Column</h5>
              </BCol>
            </BRow>

            <h6 class="mt-4 fs-md mb-1">Theme</h6>
            <p class="text-muted fs-sm">Choose your suitable Theme.</p>

            <BRow>
              <BCol
                v-for="(item, index) in layoutThemeTypes"
                :key="'theme-' + item.value"
                cols="6"
              >
                <div class="form-check card-radio">
                  <input
                    :id="'customizer-theme0' + index"
                    name="data-theme"
                    type="radio"
                    :value="item.value"
                    class="form-check-input"
                    v-model="layoutThemes"
                  />
                  <label
                    class="form-check-label p-0"
                    :for="'customizer-theme0' + index"
                  >
                    <BImg :src="item.src" alt="" class="img-fluid" />
                  </label>
                </div>
                <h5 class="fs-sm text-center fw-medium mt-2">
                  {{ item.title }}
                </h5>
              </BCol>
            </BRow>

            <h6 class="mt-4 fs-md mb-1">Color Scheme</h6>
            <p class="text-muted fs-sm">Choose Light or Dark Scheme.</p>

            <div class="colorscheme-cardradio">
              <BRow class="g-3">
                <BCol cols="6">
                  <div class="form-check card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-bs-theme"
                      id="layout-mode-light"
                      value="light"
                      v-model="mode"
                    />
                    <label
                      class="form-check-label p-0 bg-transparent"
                      for="layout-mode-light"
                    >
                      <img
                        src="@/assets/images/custom-theme/light-mode.png"
                        alt=""
                        class="img-fluid"
                      />
                    </label>
                  </div>
                  <h5 class="fs-sm text-center fw-medium mt-2">Light</h5>
                </BCol>

                <BCol cols="6">
                  <div class="form-check card-radio dark">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-bs-theme"
                      id="layout-mode-dark"
                      value="dark"
                      v-model="mode"
                    />
                    <label
                      class="form-check-label p-0 bg-transparent"
                      for="layout-mode-dark"
                    >
                      <img
                        src="@/assets/images/custom-theme/dark-mode.png"
                        alt=""
                        class="img-fluid"
                      />
                    </label>
                  </div>
                  <h5 class="fs-sm text-center fw-medium mt-2">Dark</h5>
                </BCol>

                <BCol cols="6">
                  <div class="form-check card-radio brand">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-bs-theme"
                      id="layout-mode-brand"
                      value="brand"
                      v-model="mode"
                      disabled
                    />
                    <h6
                      class="text-danger fs-18 lh-base text-center position-absolute top-50 start-50 translate-middle z-1 mb-0"
                    >
                      Coming Soon
                    </h6>
                    <label
                      class="form-check-label cursor-none p-0 bg-transparent opacity-75"
                      for="layout-mode-brand"
                    >
                      <img
                        src="@/assets/images/custom-theme/brand-mode.png"
                        alt=""
                        class="img-fluid"
                      />
                    </label>
                  </div>
                  <h5 class="fs-sm text-center fw-medium mt-2">Brand</h5>
                </BCol>
              </BRow>
            </div>

            <div v-show="!isTwoColumn" id="layout-width">
              <h6 class="mt-4 fs-md mb-1">Layout Width</h6>
              <p class="text-muted fs-sm">Choose Fluid or Boxed layout.</p>

              <BRow>
                <BCol cols="4">
                  <div class="form-check card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-layout-width"
                      id="layout-width-fluid"
                      value="fluid"
                      v-model="layoutWidth"
                    />
                    <VerticalComponent for="layout-width-fluid" />
                  </div>
                  <h5 class="fs-sm text-center fw-medium mt-2">Fluid</h5>
                </BCol>
                <BCol cols="4">
                  <div class="form-check card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-layout-width"
                      id="layout-width-boxed"
                      value="boxed"
                      v-model="layoutWidth"
                    />
                    <label
                      class="form-check-label p-0 avatar-md w-100 px-2"
                      for="layout-width-boxed"
                    >
                      <span class="d-flex gap-1 h-100 border-start border-end">
                        <span class="flex-shrink-0">
                          <span
                            class="bg-light d-flex h-100 flex-column gap-1 p-1"
                          >
                            <span
                              class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"
                            />
                            <span
                              class="d-block p-1 px-2 pb-0 bg-primary-subtle"
                            />
                            <span
                              class="d-block p-1 px-2 pb-0 bg-primary-subtle"
                            />
                            <span
                              class="d-block p-1 px-2 pb-0 bg-primary-subtle"
                            />
                          </span>
                        </span>
                        <span class="flex-grow-1">
                          <span class="d-flex h-100 flex-column">
                            <span class="bg-light d-block p-1" />
                            <span class="bg-light d-block p-1 mt-auto" />
                          </span>
                        </span>
                      </span>
                    </label>
                  </div>
                  <h5 class="fs-sm text-center fw-medium mt-2">Boxed</h5>
                </BCol>
              </BRow>
            </div>

            <div v-show="!isTwoColumn" id="layout-position">
              <h6 class="mt-4 fs-md mb-1">Layout Position</h6>
              <p class="text-muted fs-sm">
                Choose Fixed or Scrollable Layout Position.
              </p>

              <div class="btn-group radio" role="group">
                <input
                  type="radio"
                  class="btn-check"
                  name="data-layout-position"
                  id="layout-position-fixed"
                  value="fixed"
                  v-model="position"
                />
                <label class="btn btn-light w-sm" for="layout-position-fixed"
                  >Fixed</label
                >

                <input
                  type="radio"
                  class="btn-check"
                  name="data-layout-position"
                  id="layout-position-scrollable"
                  value="scrollable"
                  v-model="position"
                />
                <label
                  class="btn btn-light w-sm ms-0"
                  for="layout-position-scrollable"
                  >Scrollable</label
                >
              </div>
            </div>

            <h6 class="mt-4 fs-md mb-1">Topbar Color</h6>
            <p class="text-muted fs-sm">Choose Light or Dark Topbar Color.</p>

            <BRow>
              <BCol cols="4">
                <div class="form-check card-radio">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="data-topbar"
                    id="topbar-color-light"
                    value="light"
                    v-model="topbar"
                  />
                  <VerticalComponent for="topbar-color-light" />
                </div>
                <h5 class="fs-sm text-center fw-medium mt-2">Light</h5>
              </BCol>
              <BCol cols="4">
                <div class="form-check card-radio">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="data-topbar"
                    id="topbar-color-dark"
                    value="dark"
                    v-model="topbar"
                  />
                  <label
                    class="form-check-label p-0 avatar-md w-100"
                    for="topbar-color-dark"
                  >
                    <span class="d-flex gap-1 h-100">
                      <span class="flex-shrink-0">
                        <span
                          class="bg-light d-flex h-100 flex-column gap-1 p-1"
                        >
                          <span
                            class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"
                          />
                          <span
                            class="d-block p-1 px-2 pb-0 bg-primary-subtle"
                          />
                          <span
                            class="d-block p-1 px-2 pb-0 bg-primary-subtle"
                          />
                          <span
                            class="d-block p-1 px-2 pb-0 bg-primary-subtle"
                          />
                        </span>
                      </span>
                      <span class="flex-grow-1">
                        <span class="d-flex h-100 flex-column">
                          <span class="bg-primary d-block p-1" />
                          <span class="bg-light d-block p-1 mt-auto" />
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
                <h5 class="fs-sm text-center fw-medium mt-2">Dark</h5>
              </BCol>
            </BRow>

            <div v-show="isVertical" id="sidebar-size">
              <h6 class="mt-4 fs-md mb-1">Sidebar Size</h6>
              <p class="text-muted fs-sm">Choose a size of Sidebar.</p>

              <BRow>
                <BCol cols="4">
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-sidebar-size"
                      id="sidebar-size-default"
                      value="lg"
                      v-model="sidebarSize"
                    />
                    <VerticalComponent for="sidebar-size-default" />
                  </div>
                  <h5 class="fs-sm text-center fw-medium mt-2">Default</h5>
                </BCol>

                <BCol cols="4">
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-sidebar-size"
                      id="sidebar-size-compact"
                      value="md"
                      v-model="sidebarSize"
                    />
                    <label
                      class="form-check-label p-0 avatar-md w-100"
                      for="sidebar-size-compact"
                    >
                      <span class="d-flex gap-1 h-100">
                        <span class="flex-shrink-0">
                          <span
                            class="bg-light d-flex h-100 flex-column gap-1 p-1"
                          >
                            <span
                              class="d-block p-1 bg-primary-subtle rounded mb-2"
                            />
                            <span class="d-block p-1 pb-0 bg-primary-subtle" />
                            <span class="d-block p-1 pb-0 bg-primary-subtle" />
                            <span class="d-block p-1 pb-0 bg-primary-subtle" />
                          </span>
                        </span>
                        <span class="flex-grow-1">
                          <span class="d-flex h-100 flex-column">
                            <span class="bg-light d-block p-1" />
                            <span class="bg-light d-block p-1 mt-auto" />
                          </span>
                        </span>
                      </span>
                    </label>
                  </div>
                  <h5 class="fs-sm text-center fw-medium mt-2">Compact</h5>
                </BCol>

                <BCol cols="4">
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-sidebar-size"
                      id="sidebar-size-small"
                      value="sm"
                      v-model="sidebarSize"
                    />
                    <label
                      class="form-check-label p-0 avatar-md w-100"
                      for="sidebar-size-small"
                    >
                      <span class="d-flex gap-1 h-100">
                        <span class="flex-shrink-0">
                          <span class="bg-light d-flex h-100 flex-column gap-1">
                            <span class="d-block p-1 bg-primary-subtle mb-2" />
                            <span class="d-block p-1 pb-0 bg-primary-subtle" />
                            <span class="d-block p-1 pb-0 bg-primary-subtle" />
                            <span class="d-block p-1 pb-0 bg-primary-subtle" />
                          </span>
                        </span>
                        <span class="flex-grow-1">
                          <span class="d-flex h-100 flex-column">
                            <span class="bg-light d-block p-1" />
                            <span class="bg-light d-block p-1 mt-auto" />
                          </span>
                        </span>
                      </span>
                    </label>
                  </div>
                  <h5 class="fs-sm text-center fw-medium mt-2">
                    Small (Icon View)
                  </h5>
                </BCol>

                <BCol cols="4">
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-sidebar-size"
                      id="sidebar-size-small-hover"
                      value="sm-hover"
                      v-model="sidebarSize"
                    />
                    <label
                      class="form-check-label p-0 avatar-md w-100"
                      for="sidebar-size-small-hover"
                    >
                      <span class="d-flex gap-1 h-100">
                        <span class="flex-shrink-0">
                          <span class="bg-light d-flex h-100 flex-column gap-1">
                            <span class="d-block p-1 bg-primary-subtle mb-2" />
                            <span class="d-block p-1 pb-0 bg-primary-subtle" />
                            <span class="d-block p-1 pb-0 bg-primary-subtle" />
                            <span class="d-block p-1 pb-0 bg-primary-subtle" />
                          </span>
                        </span>
                        <span class="flex-grow-1">
                          <span class="d-flex h-100 flex-column">
                            <span class="bg-light d-block p-1" />
                            <span class="bg-light d-block p-1 mt-auto" />
                          </span>
                        </span>
                      </span>
                    </label>
                  </div>
                  <h5 class="fs-sm text-center fw-medium mt-2">
                    Small Hover View
                  </h5>
                </BCol>
              </BRow>
            </div>

            <div v-show="isVertical" id="sidebar-view">
              <h6 class="mt-4 fs-md mb-1">Sidebar View</h6>
              <p class="text-muted fs-sm">
                Choose Default or Detached Sidebar view.
              </p>

              <BRow>
                <BCol cols="4">
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-layout-style"
                      id="sidebar-view-default"
                      value="default"
                      v-model="sidebarView"
                    />
                    <VerticalComponent for="sidebar-view-default" />
                  </div>
                  <h5 class="fs-sm text-center fw-medium mt-2">Default</h5>
                </BCol>
                <BCol cols="4">
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-layout-style"
                      id="sidebar-view-detached"
                      value="detached"
                      v-model="sidebarView"
                    />
                    <label
                      class="form-check-label p-0 avatar-md w-100"
                      for="sidebar-view-detached"
                    >
                      <span class="d-flex h-100 flex-column">
                        <span
                          class="bg-light d-flex p-1 gap-1 align-items-center px-2"
                        >
                          <span
                            class="d-block p-1 bg-primary-subtle rounded me-1"
                          />
                          <span
                            class="d-block p-1 pb-0 px-2 bg-primary-subtle ms-auto"
                          />
                          <span
                            class="d-block p-1 pb-0 px-2 bg-primary-subtle"
                          />
                        </span>
                        <span class="d-flex gap-1 h-100 p-1 px-2">
                          <span class="flex-shrink-0">
                            <span
                              class="bg-light d-flex h-100 flex-column gap-1 p-1"
                            >
                              <span
                                class="d-block p-1 px-2 pb-0 bg-primary-subtle"
                              />
                              <span
                                class="d-block p-1 px-2 pb-0 bg-primary-subtle"
                              />
                              <span
                                class="d-block p-1 px-2 pb-0 bg-primary-subtle"
                              />
                            </span>
                          </span>
                        </span>
                        <span class="bg-light d-block p-1 mt-auto px-2" />
                      </span>
                    </label>
                  </div>
                  <h5 class="fs-sm text-center fw-medium mt-2">Detached</h5>
                </BCol>
              </BRow>
            </div>
            <div v-show="!isHorizontal" id="sidebar-color">
              <h6 class="mt-4 fs-md mb-1">Sidebar Color</h6>
              <p class="text-muted fs-sm">Choose a color of Sidebar.</p>

              <BRow>
                <BCol cols="4">
                  <div
                    class="form-check sidebar-setting card-radio"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBgGradient.show"
                  >
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-sidebar"
                      id="sidebar-color-light"
                      value="light"
                      v-model="sidebarColor"
                    />
                    <label
                      class="form-check-label p-0 avatar-md w-100"
                      for="sidebar-color-light"
                    >
                      <span class="d-flex gap-1 h-100">
                        <span class="flex-shrink-0">
                          <span
                            class="bg-white border-end d-flex h-100 flex-column gap-1 p-1"
                          >
                            <span
                              class="d-block p-1 px-2 bg-primary-subtle rounded mb-2"
                            />
                            <span
                              class="d-block p-1 px-2 pb-0 bg-primary-subtle"
                            />
                            <span
                              class="d-block p-1 px-2 pb-0 bg-primary-subtle"
                            />
                            <span
                              class="d-block p-1 px-2 pb-0 bg-primary-subtle"
                            />
                          </span>
                        </span>
                        <span class="flex-grow-1">
                          <span class="d-flex h-100 flex-column">
                            <span class="bg-light d-block p-1" />
                            <span class="bg-light d-block p-1 mt-auto" />
                          </span>
                        </span>
                      </span>
                    </label>
                  </div>
                  <h5 class="fs-sm text-center fw-medium mt-2">Light</h5>
                </BCol>
                <BCol cols="4">
                  <div
                    class="form-check sidebar-setting card-radio"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBgGradient.show"
                  >
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-sidebar"
                      id="sidebar-color-dark"
                      value="dark"
                      v-model="sidebarColor"
                    />
                    <label
                      class="form-check-label p-0 avatar-md w-100"
                      for="sidebar-color-dark"
                    >
                      <span class="d-flex gap-1 h-100">
                        <span class="flex-shrink-0">
                          <span
                            class="bg-primary d-flex h-100 flex-column gap-1 p-1"
                          >
                            <span
                              class="d-block p-1 px-2 bg-soft-light rounded mb-2"
                            />
                            <span class="d-block p-1 px-2 pb-0 bg-soft-light" />
                            <span class="d-block p-1 px-2 pb-0 bg-soft-light" />
                            <span class="d-block p-1 px-2 pb-0 bg-soft-light" />
                          </span>
                        </span>
                        <span class="flex-grow-1">
                          <span class="d-flex h-100 flex-column">
                            <span class="bg-light d-block p-1" />
                            <span class="bg-light d-block p-1 mt-auto" />
                          </span>
                        </span>
                      </span>
                    </label>
                  </div>
                  <h5 class="fs-sm text-center fw-medium mt-2">Dark</h5>
                </BCol>
                <BCol cols="4">
                  <button
                    v-b-toggle.collapseBgGradient
                    class="btn btn-link avatar-md w-100 p-0 overflow-hidden border active"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBgGradient"
                    aria-expanded="true"
                    aria-controls="collapseBgGradient"
                  >
                    <span class="d-flex gap-1 h-100">
                      <span class="flex-shrink-0">
                        <span
                          class="bg-vertical-gradient d-flex h-100 flex-column gap-1 p-1"
                        >
                          <span
                            class="d-block p-1 px-2 bg-soft-light rounded mb-2"
                          />
                          <span class="d-block p-1 px-2 pb-0 bg-soft-light" />
                          <span class="d-block p-1 px-2 pb-0 bg-soft-light" />
                          <span class="d-block p-1 px-2 pb-0 bg-soft-light" />
                        </span>
                      </span>
                      <span class="flex-grow-1">
                        <span class="d-flex h-100 flex-column">
                          <span class="bg-light d-block p-1" />
                          <span class="bg-light d-block p-1 mt-auto" />
                        </span>
                      </span>
                    </span>
                  </button>
                  <h5 class="fs-sm text-center fw-medium mt-2">Gradient</h5>
                </BCol>
              </BRow>

              <BCollapse class="collapse" id="collapseBgGradient">
                <div
                  class="d-flex gap-2 flex-wrap img-switch p-2 px-3 bg-light rounded"
                >
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-sidebar"
                      id="sidebar-color-gradient"
                      value="gradient"
                      v-model="sidebarColor"
                    />
                    <label
                      class="form-check-label p-0 avatar-xs rounded-circle"
                      for="sidebar-color-gradient"
                    >
                      <span
                        class="avatar-title rounded-circle bg-vertical-gradient"
                      />
                    </label>
                  </div>
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-sidebar"
                      id="sidebar-color-gradient-2"
                      value="gradient-2"
                      v-model="sidebarColor"
                    />
                    <label
                      class="form-check-label p-0 avatar-xs rounded-circle"
                      for="sidebar-color-gradient-2"
                    >
                      <span
                        class="avatar-title rounded-circle bg-vertical-gradient-2"
                      />
                    </label>
                  </div>
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-sidebar"
                      id="sidebar-color-gradient-3"
                      value="gradient-3"
                      v-model="sidebarColor"
                    />
                    <label
                      class="form-check-label p-0 avatar-xs rounded-circle"
                      for="sidebar-color-gradient-3"
                    >
                      <span
                        class="avatar-title rounded-circle bg-vertical-gradient-3"
                      />
                    </label>
                  </div>
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-sidebar"
                      id="sidebar-color-gradient-4"
                      value="gradient-4"
                      v-model="sidebarColor"
                    />
                    <label
                      class="form-check-label p-0 avatar-xs rounded-circle"
                      for="sidebar-color-gradient-4"
                    >
                      <span
                        class="avatar-title rounded-circle bg-vertical-gradient-4"
                      />
                    </label>
                  </div>
                </div>
              </BCollapse>
            </div>

            <div v-show="!isHorizontal" id="sidebar-img">
              <h6 class="mt-4 fw-semibold fs-base">Sidebar Images</h6>
              <p class="text-muted fs-sm">Choose a image of Sidebar.</p>

              <div class="d-flex gap-2 flex-wrap img-switch">
                <div class="form-check sidebar-setting card-radio">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="data-sidebar-image"
                    id="sidebarimg-none"
                    value="none"
                    v-model="sidebarImage"
                  />
                  <label
                    class="form-check-label p-0 avatar-sm h-auto"
                    for="sidebarimg-none"
                  >
                    <span
                      class="avatar-md w-auto bg-light d-flex align-items-center justify-content-center"
                    >
                      <i class="ri-close-fill fs-3xl"></i>
                    </span>
                  </label>
                </div>

                <div
                  v-for="(item, index) in layoutSideBarImages"
                  :key="'sidebar-img-' + item.value"
                  class="form-check sidebar-setting card-radio"
                >
                  <input
                    v-model="sidebarImage"
                    class="form-check-input"
                    type="radio"
                    name="data-sidebar-image"
                    :id="'sidebarimg-0' + (index + 1)"
                    :value="item.value"
                  />
                  <label
                    class="form-check-label p-0 avatar-sm h-auto"
                    :for="'sidebarimg-0' + (index + 1)"
                  >
                    <img
                      :src="item.src"
                      alt=""
                      class="avatar-md w-auto object-cover"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div id="preloader-menu">
              <h6 class="mt-4 fw-semibold fs-base">Preloader</h6>
              <p class="text-muted fs-sm">Choose a preloader.</p>

              <BRow>
                <BCol cols="4">
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-preloader"
                      id="preloader-view-custom"
                      value="enable"
                      v-model="preloader"
                    />
                    <VerticalComponent for="preloader-view-custom" />
                  </div>
                  <h5 class="fs-sm text-center fw-medium mt-2">Enable</h5>
                </BCol>
                <BCol cols="4">
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-preloader"
                      id="preloader-view-none"
                      value="disable"
                      v-model="preloader"
                    />
                    <VerticalComponent for="preloader-view-none" />
                  </div>
                  <h5 class="fs-sm text-center fw-medium mt-2">Disable</h5>
                </BCol>
              </BRow>
            </div>
            <!-- end preloader-menu -->
          </div>
        </simplebar>
      </div>
      <div class="offcanvas-footer border-top p-3 text-center">
        <BRow>
          <BCol cols="6">
            <BButton
              type="button"
              variant="light"
              class="w-100"
              id="reset-layout"
              @click="resetLayout"
            >
              Reset
            </BButton>
          </BCol>
          <BCol cols="6">
            <BLink href="#!" target="_blank" class="btn btn-primary w-100">
              Buy Now
            </BLink>
          </BCol>
        </BRow>
      </div>
    </BOffcanvas>
  </div>
</template>
