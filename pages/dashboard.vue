<script>
import appConfig from "~/app.config.json";
import simplebar from "simplebar-vue";
import { CountTo } from "vue3-count-to";
// import SalesbyCountries from "~/components/dashboard/eCommerce/SalesbyCountries.vue";
import {
  revenueChart,
  budgetChart,
  payoutsChart,
  trafficSourceChart,
  getChartColorsArray
} from "~/components/dashboard/eCommerce/chartsData.js";
import { useLayoutStore } from "~/stores/layout";

export default {
  page: {
    title: "Dashboard",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      revenueChart,
      budgetChart,
      payoutsChart,
      trafficSourceChart,
      productModal: false,
      addAmount: false
    };
  },
  components: {
    // Layout,
    simplebar,
    CountTo,
    // SalesbyCountries
  },
  computed: {
    layoutTheme() {
      return useLayoutStore().layoutTheme;
    }
  },
  mounted() {
    this.handleUpdate();
  },
  watch: {
    layoutTheme: {
      handler() {
        this.handleUpdate();
      },
      deep: true
    }
  },
  methods: {
    handleUpdate() {
      this.revenueChart = {
        ...this.revenueChart,
        chartOptions: {
          ...this.revenueChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary", "--tb-secondary"]')
        }
      };
      this.budgetChart = {
        ...this.budgetChart,
        chartOptions: {
          ...this.budgetChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary"]')
        }
      };
      this.payoutsChart = {
        ...this.payoutsChart,
        chartOptions: {
          ...this.payoutsChart.chartOptions,
          colors: getChartColorsArray('["--tb-info"]')
        }
      };
      this.trafficSourceChart = {
        ...this.trafficSourceChart,
        chartOptions: {
          ...this.trafficSourceChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary", "--tb-light"]')
        }
      };
    }
  }
};
</script>

<template>
  <BRow>
    <BCol xl="4">
      <BCard no-body class="card-height-100 border-0 overflow-hidden">
        <BCardBody class="p-0">
          <BRow class="g-0">
            <BCol md="6">
              <BCard
                no-body
                class="shadow-none border-end-md border-bottom rounded-0 mb-0"
              >
                <BCardBody>
                  <BDropdown
                    class="float-end"
                    toggle-class="text-reset dropdown-btn p-0"
                    no-caret
                    end
                    variant="ghost-dark"
                  >
                    <template #button-content>
                      <span class="text-muted fs-lg">
                        <i class="mdi mdi-dots-vertical align-middle" />
                      </span>
                    </template>
                    <div class="dropdown-menu-end">
                      <BLink class="dropdown-item" href="#">Today</BLink>
                      <BLink class="dropdown-item" href="#">Last Week</BLink>
                      <BLink class="dropdown-item" href="#">Last Month</BLink>
                      <BLink class="dropdown-item" href="#">Current Year</BLink>
                    </div>
                  </BDropdown>
                  <div class="avatar-sm">
                    <span
                      class="avatar-title bg-primary-subtle text-primary rounded-circle fs-3"
                    >
                      <i class="ph-wallet"></i>
                    </span>
                  </div>
                  <div class="mt-4">
                    <p
                      class="text-uppercase fw-medium text-muted text-truncate fs-sm"
                    >
                      Total Revenue
                    </p>
                    <h4 class="fw-semibold mb-3">
                      <count-to
                        :startVal="0"
                        :duration="5000"
                        :endVal="275123"
                        :decimals="2"
                        prefix="Php "
                        suffix=""
                      ></count-to>
                    </h4>
                    <div class="d-flex align-items-center gap-2">
                      <h5 class="text-success fs-xs mb-0">
                        <i
                          class="ri-arrow-right-up-line fs-sm align-middle"
                        ></i>
                        +19.07 %
                      </h5>
                      <p class="text-muted mb-0">than last month</p>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
            <BCol md="6">
              <BCard no-body class="shadow-none border-bottom rounded-0 mb-0">
                <BCardBody>
                  <BDropdown
                    class="float-end"
                    toggle-class="text-reset dropdown-btn p-0"
                    no-caret
                    end
                    variant="ghost-dark"
                  >
                    <template #button-content>
                      <span class="text-muted fs-lg">
                        <i class="mdi mdi-dots-vertical align-middle" />
                      </span>
                    </template>
                    <div class="dropdown-menu-end">
                      <BLink class="dropdown-item" href="#">Today</BLink>
                      <BLink class="dropdown-item" href="#">Last Week</BLink>
                      <BLink class="dropdown-item" href="#">Last Month</BLink>
                      <BLink class="dropdown-item" href="#">Current Year</BLink>
                    </div>
                  </BDropdown>
                  <div class="avatar-sm">
                    <span
                      class="avatar-title bg-dark-subtle text-dark rounded-circle fs-3"
                    >
                      <i class="ph-bag"></i>
                    </span>
                  </div>
                  <div class="mt-4">
                    <p
                      class="text-uppercase fw-medium text-muted text-truncate fs-sm"
                    >
                      Requests
                    </p>
                    <h4 class="fw-semibold mb-3">
                      <count-to
                        :startVal="0"
                        :duration="5000"
                        :endVal="33"
                      ></count-to>
                    </h4>
                    <div class="d-flex align-items-center gap-2">
                      <h5 class="text-success fs-xs mb-0">
                        <i
                          class="ri-arrow-right-up-line fs-sm align-middle"
                        ></i>
                        +8.13 %
                      </h5>
                      <p class="text-muted mb-0">than last month</p>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
            <BCol md="6">
              <BCard no-body class="shadow-none border-end-md rounded-0 mb-0">
                <BCardBody>
                  <BDropdown
                    class="float-end"
                    toggle-class="text-reset dropdown-btn p-0"
                    no-caret
                    end
                    variant="ghost-dark"
                  >
                    <template #button-content>
                      <span class="text-muted fs-lg">
                        <i class="mdi mdi-dots-vertical align-middle" />
                      </span>
                    </template>
                    <div class="dropdown-menu-end">
                      <BLink class="dropdown-item" href="#">Today</BLink>
                      <BLink class="dropdown-item" href="#">Last Week</BLink>
                      <BLink class="dropdown-item" href="#">Last Month</BLink>
                      <BLink class="dropdown-item" href="#">Current Year</BLink>
                    </div>
                  </BDropdown>
                  <div class="avatar-sm">
                    <span
                      class="avatar-title bg-light text-body rounded-circle fs-3"
                    >
                      <i class="ph-eye"></i>
                    </span>
                  </div>
                  <div class="mt-4">
                    <p
                      class="text-uppercase fw-medium text-muted text-truncate fs-sm"
                    >
                      Prospect Tenant Views
                    </p>
                    <h4 class="fw-semibold mb-3">
                      <count-to
                        :startVal="0"
                        :duration="5000"
                        :endVal="48"
                      ></count-to>
                    </h4>
                    <div class="d-flex align-items-center gap-2">
                      <h5 class="text-danger fs-xs mb-0">
                        <i
                          class="ri-arrow-right-down-line fs-sm align-middle"
                        ></i>
                        +2.01 %
                      </h5>
                      <p class="text-muted mb-0">than last month</p>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
            <BCol md="6">
              <BCard
                no-body
                class="shadow-none border-top border-top-md-0 rounded-0 mb-0"
              >
                <BCardBody>
                  <BDropdown
                    class="float-end"
                    toggle-class="text-reset dropdown-btn p-0"
                    no-caret
                    end
                    variant="ghost-dark"
                  >
                    <template #button-content>
                      <span class="text-muted fs-lg">
                        <i class="mdi mdi-dots-vertical align-middle" />
                      </span>
                    </template>
                    <div class="dropdown-menu-end">
                      <BLink class="dropdown-item" href="#">Today</BLink>
                      <BLink class="dropdown-item" href="#">Last Week</BLink>
                      <BLink class="dropdown-item" href="#">Last Month</BLink>
                      <BLink class="dropdown-item" href="#">Current Year</BLink>
                    </div>
                  </BDropdown>
                  <div class="avatar-sm">
                    <span
                      class="avatar-title bg-info-subtle text-info rounded-circle fs-3"
                    >
                      <i class="ph-users-three"></i>
                    </span>
                  </div>
                  <div class="mt-4">
                    <p
                      class="text-uppercase fw-medium text-muted text-truncate fs-sm"
                    >
                      Prospect tenants visits
                    </p>
                    <h4 class="fw-semibold mb-3">
                      <count-to
                        :startVal="0"
                        :duration="5000"
                        :endVal="24"
                        suffix=""
                      ></count-to>
                    </h4>
                    <div class="d-flex align-items-center gap-2">
                      <h5 class="text-success fs-xs mb-0">
                        <i
                          class="ri-arrow-right-up-line fs-sm align-middle"
                        ></i>
                        +10.42 %
                      </h5>
                      <p class="text-muted mb-0">than last month</p>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
          </BRow>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="8">
      <BCard no-body>
        <BRow class="g-0">
          <BCol xl="9">
            <BCardHeader class="border-0 align-items-center d-flex">
              <BCardTitle class="mb-0 flex-grow-1">Revenue</BCardTitle>
              <div class="d-flex">
                <BButton
                  type="button"
                  variant="subtle-secondary me-1"
                  size="sm"
                >
                  ALL
                </BButton>
                <BButton
                  type="button"
                  variant="subtle-secondary me-1"
                  size="sm"
                >
                  1M
                </BButton>
                <BButton
                  type="button"
                  variant="subtle-secondary me-1"
                  size="sm"
                >
                  6M
                </BButton>
                <BButton type="button" variant="subtle-primary" size="sm">
                  1Y
                </BButton>
              </div>
            </BCardHeader>
            <BCardBody class="ps-0">
              <div class="w-100">
                <apexchart
                  class="apex-charts"
                  height="328"
                  dir="ltr"
                  :series="revenueChart.series"
                  :options="revenueChart.chartOptions"
                />
              </div>
            </BCardBody>
          </BCol>
          <BCol xl="3">
            <BCardBody
              class="border-start-xl border-top border-top-xl-0 border-2 h-100"
            >
              <div>
                <p class="text-muted mb-2">Budget</p>
                <h4>
                  Php 250K
                  <small class="text-success fs-sm fw-normal"
                    ><i class="ph-arrow-up align-baseline"></i> 2.17%</small
                  >
                </h4>
                <p class="text-muted">Budget in than last years</p>
                <div class="mx-3">
                  <apexchart
                    class="apex-charts"
                    height="45"
                    dir="ltr"
                    :series="budgetChart.series"
                    :options="budgetChart.chartOptions"
                  />
                </div>
              </div>

              <div class="mt-4">
                <p class="text-muted mb-2">Payouts</p>
                <h4>
                  Php 245K
                  <small class="text-danger fs-sm fw-normal"
                    ><i class="ph-arrow-down align-baseline"></i> -1.36%</small
                  >
                </h4>
                <p class="text-muted">Payouts in than last years</p>
                <div class="mx-3">
                  <apexchart
                    class="apex-charts"
                    height="45"
                    dir="ltr"
                    :series="payoutsChart.series"
                    :options="payoutsChart.chartOptions"
                  />
                </div>
              </div>
              <div class="mt-4">
                <BButton
                  type="button"
                  variant="primary"
                  class="w-100"
                  @click="addAmount = !addAmount"
                  >Add Amount</BButton
                >
              </div>
            </BCardBody>
          </BCol>
        </BRow>
      </BCard>
    </BCol>
  </BRow>

  <BRow>
    <BCol xl="4" lg="6">
      <BCard no-body class="card-height-100">
        <BCardHeader class="d-flex">
          <BCardTitle class="mb-0 flex-grow-1">Traffic Source</BCardTitle>
          <BDropdown
            class="card-header-dropdown float-end"
            variant="ghost-dark"
            toggle-class="p-0"
            no-caret
            end
          >
            <template #button-content>
              <i class="ph-dots-three-outline-vertical"></i>
            </template>
            <div class="dropdown-menu-end">
              <BLink class="dropdown-item" href="#">Today</BLink>
              <BLink class="dropdown-item" href="#">Last Week</BLink>
              <BLink class="dropdown-item" href="#">Last Month</BLink>
              <BLink class="dropdown-item" href="#">Current Year</BLink>
            </div>
          </BDropdown>
        </BCardHeader>
        <BCardBody>
          <apexchart
            class="apex-charts"
            height="360"
            dir="ltr"
            :series="trafficSourceChart.series"
            :options="trafficSourceChart.chartOptions"
          />
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="4" lg="6">
      <BCard no-body class="card-height-100">
        <BCardHeader class="d-flex">
          <BCardTitle class="mb-0 flex-grow-1">Recent transactions</BCardTitle>
          <BLink href="#!" class="text-muted"
            >View All <i class="ph-caret-right align-middle"></i
          ></BLink>
        </BCardHeader>
        <BCardBody class="px-0">
          <simplebar class="px-3" style="max-height: 360px">
            <table class="table mb-0">
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex align-items-center gap-1">
                      <div class="flex-shrink-0">
                        <img
                          src="@/assets/images/users/avatar-2.jpg"
                          alt=""
                          class="avatar-sm rounded-circle p-1"
                        />
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="fs-md mb-1">Bethany Nienow</h6>
                        <p class="text-muted mb-0">03 Feb, 2023</p>
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    <h6 class="fs-md">Php 7,500</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center gap-1">
                      <div class="flex-shrink-0">
                        <img
                          src="@/assets/images/users/avatar-7.jpg"
                          alt=""
                          class="avatar-sm rounded-circle p-1"
                        />
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="fs-md mb-1">Sonia Conn</h6>
                        <p class="text-muted mb-0">03 Feb, 2023</p>
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    <h6 class="fs-md">Php 9,500</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center gap-1">
                      <div class="flex-shrink-0">
                        <img
                          src="@/assets/images/users/avatar-4.jpg"
                          alt=""
                          class="avatar-sm rounded-circle p-1"
                        />
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="fs-md mb-1">Talon Bradtke</h6>
                        <p class="text-muted mb-0">03 Feb, 2023</p>
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    <h6 class="fs-md">Php 11,500</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center gap-1">
                      <div class="flex-shrink-0">
                        <img
                          src="@/assets/images/users/avatar-5.jpg"
                          alt=""
                          class="avatar-sm rounded-circle p-1"
                        />
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="fs-md mb-1">Tyrell Kerluke</h6>
                        <p class="text-muted mb-0">03 Feb, 2023</p>
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    <h6 class="fs-md">Php 8,500</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center gap-1">
                      <div class="flex-shrink-0">
                        <img
                          src="@/assets/images/users/avatar-6.jpg"
                          alt=""
                          class="avatar-sm rounded-circle p-1"
                        />
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="fs-md mb-1">Ross Zieme</h6>
                        <p class="text-muted mb-0">03 Feb, 2023</p>
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    <h6 class="fs-md">Php 9,000</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center gap-1">
                      <div class="flex-shrink-0">
                        <img
                          src="@/assets/images/users/avatar-1.jpg"
                          alt=""
                          class="avatar-sm rounded-circle p-1"
                        />
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="fs-md mb-1">Hollis Spencer</h6>
                        <p class="text-muted mb-0">03 Feb, 2023</p>
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    <h6 class="fs-md">Php 8,500</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex align-items-center gap-1">
                      <div class="flex-shrink-0">
                        <img
                          src="@/assets/images/users/avatar-8.jpg"
                          alt=""
                          class="avatar-sm rounded-circle p-1"
                        />
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="fs-md mb-1">Cordia Grady</h6>
                        <p class="text-muted mb-0">03 Feb, 2023</p>
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    <h6 class="fs-md">Php 11,000</h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </simplebar>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="4" lg="6">
      <BCard no-body class="card-height-100">
        <BCardHeader class="d-flex">
          <BCardTitle title-tag="h5" class="flex-grow-1 mb-0"
          >Recent Activity</BCardTitle
          >
          <div class="flex-shrink-0">
            <BLink href="#!" class="btn btn-subtle-info btn-sm"
            >View More <i class="ph-caret-right align-middle"></i
            ></BLink>
          </div>
        </BCardHeader>
        <BCardBody class="px-0">
          <simplebar class="px-3" style="max-height: 350px">
            <div class="acitivity-timeline acitivity-main">
              <div class="acitivity-item d-flex">
                <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                  <div
                      class="avatar-title bg-success-subtle text-success rounded-circle"
                  >
                    <i class="ph-shopping-cart"></i>
                  </div>
                </div>
                <div class="flex-grow-1 ms-3">
                  <h6 class="mb-1 lh-base">Purchased by James Price</h6>
                  <p class="text-muted mb-2">Product noise evolve smartwatch</p>
                  <small class="mb-0 text-muted">05:57 AM Today</small>
                </div>
              </div>
              <div class="acitivity-item py-3 d-flex">
                <div class="flex-shrink-0">
                  <img
                      src="@/assets/images/users/avatar-2.jpg"
                      alt=""
                      class="avatar-xs rounded-circle acitivity-avatar"
                  />
                </div>
                <div class="flex-grow-1 ms-3">
                  <h6 class="mb-1 lh-base">
                    Natasha Carey have liked the products
                  </h6>
                  <p class="text-muted mb-2">
                    Allow users to like products in your WooCommerce store.
                  </p>
                  <small class="mb-0 text-muted">25 Dec, 2022</small>
                </div>
              </div>
              <div class="acitivity-item py-3 d-flex">
                <div class="flex-shrink-0">
                  <div class="avatar-xs acitivity-avatar">
                    <div
                        class="avatar-title rounded-circle bg-secondary-subtle text-secondary"
                    >
                      <i class="mdi mdi-sale fs-14"></i>
                    </div>
                  </div>
                </div>
                <div class="flex-grow-1 ms-3">
                  <h6 class="mb-1 lh-base">
                    Today offers by
                    <nuxt-link
                        to="/ecommerce/seller-overview"
                        class="link-secondary"
                    >Digitech Galaxy</nuxt-link
                    >
                  </h6>
                  <p class="text-muted mb-2">
                    Offer is valid on orders of $230 Or above for selected
                    products only.
                  </p>
                  <small class="mb-0 text-muted">12 Dec, 2022</small>
                </div>
              </div>
              <div class="acitivity-item py-3 d-flex">
                <div class="flex-shrink-0">
                  <div class="avatar-xs acitivity-avatar">
                    <div
                        class="avatar-title rounded-circle bg-warning-subtle text-warning"
                    >
                      <i class="ri-bookmark-fill"></i>
                    </div>
                  </div>
                </div>
                <div class="flex-grow-1 ms-3">
                  <h6 class="mb-1 lh-base">Favoried Product</h6>
                  <p class="text-muted mb-2">
                    Esther James have favorited product.
                  </p>
                  <small class="mb-0 text-muted">25 Nov, 2022</small>
                </div>
              </div>
              <div class="acitivity-item py-3 d-flex">
                <div class="flex-shrink-0">
                  <div class="avatar-xs acitivity-avatar">
                    <div
                        class="avatar-title rounded-circle bg-secondary-subtle text-secondary"
                    >
                      <i class="mdi mdi-sale fs-14"></i>
                    </div>
                  </div>
                </div>
                <div class="flex-grow-1 ms-3">
                  <h6 class="mb-1 lh-base">
                    Flash sale starting
                    <span class="text-primary">Tomorrow.</span>
                  </h6>
                  <p class="text-muted mb-2">
                    Flash sale by
                    <BLink
                        href="javascript:void(0);"
                        class="link-secondary fw-medium"
                    >Zoetic Fashion</BLink
                    >
                  </p>
                  <small class="mb-0 text-muted">22 Oct, 2022</small>
                </div>
              </div>
              <div class="acitivity-item d-flex">
                <div class="flex-shrink-0">
                  <div class="avatar-xs acitivity-avatar">
                    <div
                        class="avatar-title rounded-circle bg-info-subtle text-info"
                    >
                      <i class="ri-line-chart-line"></i>
                    </div>
                  </div>
                </div>
                <div class="flex-grow-1 ms-3">
                  <h6 class="mb-1 lh-base">Monthly sales report</h6>
                  <p class="text-muted mb-2">
                    <span class="text-danger">2 days left</span> notification to
                    submit the monthly sales report.
                    <BLink
                        href="javascript:void(0);"
                        class="link-warning text-decoration-underline"
                    >Reports Builder</BLink
                    >
                  </p>
                  <small class="mb-0 text-muted">15 Oct, 2022</small>
                </div>
              </div>
            </div>
          </simplebar>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>

  <BModal
    v-model="addAmount"
    id="addAmount"
    hide-footer
    title="Add Amount"
    ok-variant="primary"
    header-class="pt-4 px-4"
  >
    <BForm>
      <BRow class="g-3">
        <BCol lg="12">
          <div>
            <label for="AmountInput" class="form-label">Amount</label>
            <BFormInput
              type="number"
              id="AmountInput"
              placeholder="$000.00"
            ></BFormInput>
          </div>
        </BCol>
        <BCol lg="12">
          <label class="form-label">Select Method</label>
          <BRow class="g-3">
            <BCol lg="4">
              <label class="border rounded w-100 form-label p-2">
                <BFormRadio name="exampleRadios" value="" checked
                  >Visa</BFormRadio
                >
              </label>
            </BCol>
            <BCol lg="4">
              <label class="border rounded w-100 form-label p-2">
                <BFormRadio name="exampleRadios" value=""
                  >Mastercard</BFormRadio
                >
              </label>
            </BCol>
            <BCol lg="4">
              <label class="border rounded w-100 form-label p-2">
                <BFormRadio name="exampleRadios" value=""
                  >Credit Card</BFormRadio
                >
              </label>
            </BCol>
          </BRow>
        </BCol>
        <BCol lg="12">
          <div>
            <label for="cardNumber" class="form-label">Card Number</label>
            <BFormInput
              type="number"
              id="cardNumber"
              placeholder="xxxx xxxx xxxx xxxx"
            ></BFormInput>
          </div>
        </BCol>
        <BCol lg="8">
          <div>
            <label for="month" class="form-label">Expiry Date</label>
            <BRow class="g-3">
              <BCol lg="6">
                <BFormInput
                  type="number"
                  id="month"
                  placeholder="MM"
                ></BFormInput>
              </BCol>
              <BCol lg="6">
                <BFormInput
                  type="number"
                  id="years"
                  placeholder="YYYY"
                ></BFormInput>
              </BCol>
            </BRow>
          </div>
        </BCol>
        <BCol lg="4">
          <div>
            <label for="cvv/cvc" class="form-label">CVV/CVC</label>
            <BFormInput
              type="number"
              id="cvv/cvc"
              placeholder="***"
            ></BFormInput>
          </div>
        </BCol>
        <BCol lg="12">
          <div>
            <label for="cardHoldersName" class="form-label"
              >Cardholders Name</label
            >
            <BFormInput
              type="text"
              id="cardHoldersName"
              placeholder="Enter name"
            ></BFormInput>
          </div>
        </BCol>
      </BRow>
      <BRow>
        <BCol lg="12" class="text-end mt-3">
          <BButton
            type="button"
            variant="ghost-danger"
            class="me-2"
            @click="addAmount = false"
            ><i class="ph-x align-middle"></i> Close</BButton
          >
          <BButton type="button" variant="primary">Add Amount</BButton>
        </BCol>
      </BRow>
    </BForm>
  </BModal>
</template>
