const horMenu = [
  {
    label: "t-menu",
    isHeader: true
  },
  {
    id: "dashboard",
    label: "t-dashboards",
    icon: "ph-gauge",
    link: "sidebarDashboards",
    subItems: [
      {
        id: "analytics",
        label: "t-analytics",
        link: "/dashboard/analytics",
        parentId: "dashboard"
      },
      {
        id: "crm",
        label: "t-crm",
        link: "/dashboard/crm",
        parentId: "dashboard"
      },
      {
        id: "learning",
        label: "t-learning",
        link: "/dashboard/learning",
        parentId: "dashboard"
      },
      {
        id: "real-estate",
        label: "t-real-estate",
        link: "/dashboard/real-estate",
        parentId: "dashboard"
      }
    ]
  },
  {
    label: "t-apps",
    isHeader: true
  },
  {
    id: "apps-calendar",
    label: "t-calendar",
    icon: "ph-calendar",
    link: "/calendar"
  },
  { id: "apps-chat", label: "t-chat", icon: "ph-chats", link: "/chat" },
  { id: "apps-email", label: "t-email", icon: "ph-envelope", link: "/email" },
  {
    id: "apps-file-manager",
    label: "t-file-manager",
    icon: "ph-folder-open",
    link: "/file-manager"
  },
  {
    id: "learning",
    label: "t-learning",
    icon: "ph-graduation-cap",
    link: "sidebarLearning",
    subItems: [
      {
        id: "courses",
        label: "t-courses",
        link: "sidebarCourses",
        parentId: "learning",
        isChildItem: true,
        subItems: [
          {
            id: 1,
            label: "t-list-view",
            link: "/learning/list",
            parentId: "learning"
          },
          {
            id: 2,
            label: "t-grid-view",
            link: "/learning/grid",
            parentId: "learning"
          },
          {
            id: 3,
            label: "t-category",
            link: "/learning/category",
            parentId: "learning"
          },
          {
            id: 4,
            label: "t-overview",
            link: "/learning/overview",
            parentId: "learning"
          },
          {
            id: 5,
            label: "t-create-course",
            link: "/learning/create",
            parentId: "learning"
          }
        ]
      },
      {
        id: "students",
        label: "t-students",
        link: "sidebarStudent",
        parentId: "learning",
        isChildItem: true,
        subItems: [
          {
            id: 1,
            label: "t-my-subscriptions",
            link: "/student/subscriptions",
            parentId: "learning"
          },
          {
            id: 2,
            label: "t-my-courses",
            link: "/student/courses",
            parentId: "learning"
          }
        ]
      },
      {
        id: "instructors",
        label: "t-instructors",
        link: "sidebarInstructors",
        parentId: "learning",
        isChildItem: true,
        subItems: [
          {
            id: 1,
            label: "t-list-view",
            link: "/instructors/list",
            parentId: "learning"
          },
          {
            id: 2,
            label: "t-grid-view",
            link: "/instructors/grid",
            parentId: "learning"
          },
          {
            id: 3,
            label: "t-overview",
            link: "/instructors/overview",
            parentId: "learning"
          },
          {
            id: 4,
            label: "t-create-instructors",
            link: "/instructors/create",
            parentId: "learning"
          }
        ]
      }
    ]
  },
  {
    id: "invoice",
    label: "t-invoices",
    icon: "ph-file-text",
    link: "sidebarInvoices",
    subItems: [
      {
        id: "listview",
        label: "t-list-view",
        link: "/invoices/list",
        parentId: "invoice"
      },
      {
        id: "overview",
        label: "t-overview",
        link: "/invoices/overview",
        parentId: "invoice"
      },
      {
        id: "createinvoice",
        label: "t-create-invoice",
        link: "/invoices/create",
        parentId: "invoice"
      }
    ]
  },
  {
    id: "support-ticket",
    label: "t-support-tickets",
    icon: "ph-ticket",
    link: "sidebarTickets",
    subItems: [
      {
        id: "listview",
        label: "t-list-view",
        link: "/tickets/list",
        parentId: "support-ticket"
      },
      {
        id: "overview",
        label: "t-overview",
        link: "/tickets/overview",
        parentId: "support-ticket"
      }
    ]
  },
  {
    id: "real-estate",
    label: "t-real-estate",
    icon: "ph-buildings",
    link: "sidebarRealeEstate",
    subItems: [
      {
        id: "sign in",
        label: "t-listing-grid",
        link: "/real-estate/grid",
        parentId: "real-estate"
      },
      {
        id: "listinglist",
        label: "t-listing-list",
        link: "/real-estate/list",
        parentId: "real-estate"
      },
      {
        id: "listingmap",
        label: "t-listing-map",
        link: "/real-estate/map",
        parentId: "real-estate"
      },
      {
        id: "property-overview",
        label: "t-property-overview",
        link: "/real-estate/property-overview",
        parentId: "real-estate"
      },
      {
        id: "agent",
        label: "t-agent",
        link: "sidebarAgent",
        isChildItem: true,
        subItems: [
          { id: 1, label: "t-list-view", link: "/real-estate-agent/list" },
          { id: 2, label: "t-grid-view", link: "/real-estate-agent/grid" },
          { id: 3, label: "t-overview", link: "/real-estate-agent/overview" }
        ]
      },
      {
        id: "agencies",
        label: "t-agencies",
        link: "sidebarAgencies",
        isChildItem: true,
        subItems: [
          { id: 1, label: "t-list-view", link: "/real-estate-agencies/list" },
          { id: 3, label: "t-overview", link: "/real-estate-agencies/overview" }
        ]
      },
      {
        id: "add-property",
        label: "t-add-property",
        link: "/real-estate/add-properties",
        parentId: "real-estate"
      },
      {
        id: "earnings",
        label: "t-earnings",
        link: "/real-estate/earnings",
        parentId: "real-estate"
      }
    ]
  },
  {
    label: "t-pages",
    isHeader: true
  },
  {
    id: "authentication",
    label: "t-authentication",
    icon: "ph-user-circle",
    link: "sidebarAuth",
    subItems: [
      {
        id: "signin",
        label: "t-signin",
        link: "/auth/signin",
        parentId: "authentication"
      },
      {
        id: "sign up",
        label: "t-signup",
        link: "/auth/signup",
        parentId: "authentication"
      },
      {
        id: "password-reset",
        label: "t-password-reset",
        link: "/auth/pass-reset",
        parentId: "authentication"
      },
      {
        id: "password-create",
        label: "t-password-create",
        link: "/auth/pass-change",
        parentId: "authentication"
      },
      {
        id: "lockscreen",
        label: "t-lock-screen",
        link: "/auth/lockscreen",
        parentId: "authentication"
      },
      {
        id: "logout",
        label: "t-logout",
        link: "/auth/logout",
        parentId: "authentication"
      },
      {
        id: "successmessage",
        label: "t-success-message",
        link: "/auth/success-msg",
        parentId: "authentication"
      },
      {
        id: "verification",
        label: "t-two-step-verification",
        link: "/auth/twostep",
        parentId: "authentication"
      },
      {
        id: "error",
        label: "t-errors",
        link: "sidebarErrors",
        parentId: "authentication",
        isChildItem: true,
        subItems: [
          {
            id: 1,
            label: "t-404-error",
            link: "/auth/404",
            parentId: "authentication"
          },
          {
            id: 2,
            label: "t-500",
            link: "/auth/500",
            parentId: "authentication"
          },
          {
            id: 3,
            label: "t-503",
            link: "/auth/503",
            parentId: "authentication"
          },
          {
            id: 4,
            label: "t-offline-page",
            link: "/auth/offline",
            parentId: "authentication"
          }
        ]
      }
    ]
  },
  {
    id: "pages",
    label: "t-pages",
    icon: "ph-address-book",
    link: "sidebarPages",
    subItems: [
      {
        id: "starter",
        label: "t-starter",
        link: "/pages/starter",
        parentId: "pages"
      },
      {
        id: "profile",
        label: "t-profile",
        link: "/pages/profile",
        parentId: "pages"
      },
      {
        id: "profilesettings",
        label: "t-profile-setting",
        link: "/pages/profile-settings",
        parentId: "pages"
      },
      {
        id: "contacts",
        label: "t-contacts",
        link: "/pages/contacts",
        parentId: "pages"
      },
      {
        id: "timeline",
        label: "t-timeline",
        link: "/pages/timeline",
        parentId: "pages"
      },
      { id: "faqs", label: "t-faqs", link: "/pages/faqs", parentId: "pages" },
      {
        id: "pricing",
        label: "t-pricing",
        link: "/pages/pricing",
        parentId: "pages"
      },
      {
        id: "maintenace",
        label: "t-maintenance",
        link: "/pages/maintenance",
        parentId: "pages"
      },
      {
        id: "comingsoon",
        label: "t-coming-soon",
        link: "/pages/coming-soon",
        parentId: "pages"
      },
      {
        id: "privacypolicy",
        label: "t-privacy-policy",
        link: "/pages/privacy-policy",
        parentId: "pages"
      },
      {
        id: "terms",
        label: "t-term-conditions",
        link: "/pages/term-conditions",
        parentId: "pages"
      }
    ]
  },
  {
    label: "t-components",
    isHeader: true
  },
  {
    id: "bootstrapui",
    label: "t-bootstrap-ui",
    icon: "ph-bandaids",
    link: "sidebarUI",
    subItems: [
      { id: 1, label: "t-alerts", link: "/ui/alerts", parentId: "boostrapui" },
      { id: 2, label: "t-badges", link: "/ui/badges", parentId: "boostrapui" },
      {
        id: 3,
        label: "t-buttons",
        link: "/ui/buttons",
        parentId: "boostrapui"
      },
      { id: 4, label: "t-colors", link: "/ui/colors", parentId: "boostrapui" },
      { id: 5, label: "t-cards", link: "/ui/cards", parentId: "boostrapui" },
      {
        id: 6,
        label: "t-carousel",
        link: "/ui/carousel",
        parentId: "boostrapui"
      },
      {
        id: 7,
        label: "t-dropdowns",
        link: "/ui/dropdowns",
        parentId: "boostrapui"
      },
      { id: 8, label: "t-grid", link: "/ui/grid", parentId: "boostrapui" },
      { id: 9, label: "t-images", link: "/ui/images", parentId: "boostrapui" },
      { id: 10, label: "t-tabs", link: "/ui/tabs", parentId: "boostrapui" },
      {
        id: 11,
        label: "t-accordion-collapse",
        link: "/ui/accordions",
        parentId: "boostrapui"
      },
      { id: 12, label: "t-modals", link: "/ui/modals", parentId: "boostrapui" },
      {
        id: 13,
        label: "t-offcanvas",
        link: "/ui/offcanvas",
        parentId: "boostrapui"
      },
      {
        id: 14,
        label: "t-placeholders",
        link: "/ui/placeholders",
        parentId: "boostrapui"
      },
      {
        id: 15,
        label: "t-progress",
        link: "/ui/progress",
        parentId: "boostrapui"
      },
      {
        id: 16,
        label: "t-media-object",
        link: "/ui/media",
        parentId: "boostrapui"
      },
      {
        id: 17,
        label: "t-embed-video",
        link: "/ui/embed-video",
        parentId: "boostrapui"
      },
      {
        id: 18,
        label: "t-typography",
        link: "/ui/typography",
        parentId: "boostrapui"
      },
      { id: 19, label: "t-lists", link: "/ui/lists", parentId: "boostrapui" },
      { id: 20, label: "t-links", link: "/ui/links", parentId: "boostrapui" },
      {
        id: 21,
        label: "t-general",
        link: "/ui/general",
        parentId: "boostrapui"
      },
      {
        id: 22,
        label: "t-utilities",
        link: "/ui/utilities",
        parentId: "boostrapui"
      }
    ]
  },
  {
    id: "advanceui",
    label: "t-advance-ui",
    icon: "bi bi-layers",
    link: "sidebarAdvanceUI",
    subItems: [
      {
        id: 1,
        label: "t-sweet-alerts",
        link: "/advance-ui/sweetalerts",
        parentId: "advanceui"
      },
      {
        id: 2,
        label: "t-scrollbar",
        link: "/advance-ui/scrollbar",
        parentId: "advanceui"
      },
      {
        id: 3,
        label: "t-swiper-slider",
        link: "/advance-ui/swiper",
        parentId: "advanceui"
      },
      // { id: 4, label: "t-ratings", link: "/advance-ui/ratings", parentId: "advanceui" },
      {
        id: 5,
        label: "t-highlight",
        link: "/advance-ui/highlight",
        parentId: "advanceui"
      }
    ]
  },
  {
    id: "customui",
    label: "t-custom-ui",
    icon: "ph-wrench",
    link: "customUI",
    subItems: [
      { id: 1, label: "t-ribbons", link: "/ui/ribbons", parentId: "customui" },
      { id: 2, label: "t-profile", link: "/ui/profile", parentId: "customui" },
      { id: 3, label: "t-counter", link: "/ui/counter", parentId: "customui" }
    ]
  },
  {
    id: "widgets",
    label: "t-widgets",
    icon: "ph-paint-brush-broad",
    link: "/widgets"
  },
  {
    id: "forms",
    label: "t-forms",
    icon: "ri-file-list-3-line",
    link: "sidebarForms",
    subItems: [
      {
        id: 1,
        label: "t-basic-elements",
        link: "/forms/elements",
        parentId: "forms"
      },
      {
        id: 2,
        label: "t-form-select",
        link: "/forms/select",
        parentId: "forms"
      },
      {
        id: 3,
        label: "t-checkboxes-radios",
        link: "/forms/checkboxs-radios",
        parentId: "forms"
      },
      { id: 4, label: "t-pickers", link: "/forms/pickers", parentId: "forms" },
      {
        id: 5,
        label: "t-input-masks",
        link: "/forms/masks",
        parentId: "forms"
      },
      {
        id: 6,
        label: "t-advanced",
        link: "/forms/advanced",
        parentId: "forms"
      },
      {
        id: 7,
        label: "t-range-slider",
        link: "/forms/range-sliders",
        parentId: "forms"
      },
      {
        id: 8,
        label: "t-validation",
        link: "/forms/validation",
        parentId: "forms"
      },
      { id: 9, label: "t-wizard", link: "/forms/wizard", parentId: "forms" },
      { id: 10, label: "t-editors", link: "/forms/editors", parentId: "forms" },
      {
        id: 11,
        label: "t-file-uploads",
        link: "/forms/file-uploads",
        parentId: "forms"
      },
      {
        id: 12,
        label: "t-form-layouts",
        link: "/forms/layouts",
        parentId: "forms"
      }
    ]
  },
  {
    id: "tables",
    label: "t-tables",
    icon: "ph-table",
    link: "sidebarTables",
    subItems: [
      {
        id: 1,
        label: "t-basic-tables",
        link: "/tables/basic",
        parentId: "tables"
      }
    ]
  },
  {
    id: "apexcharts",
    label: "t-apexcharts",
    icon: "ph-chart-pie-slice",
    link: "sidebarCharts",
    subItems: [
      {
        id: 1,
        label: "t-line",
        link: "/charts/apex-line",
        parentId: "apexcharts"
      },
      {
        id: 2,
        label: "t-area",
        link: "/charts/apex-area",
        parentId: "apexcharts"
      },
      {
        id: 3,
        label: "t-column",
        link: "/charts/apex-column",
        parentId: "apexcharts"
      },
      {
        id: 4,
        label: "t-bar",
        link: "/charts/apex-bar",
        parentId: "apexcharts"
      },
      {
        id: 5,
        label: "t-mixed",
        link: "/charts/apex-mixed",
        parentId: "apexcharts"
      },
      {
        id: 6,
        label: "t-range-area",
        link: "/charts/apex-range-area",
        parentId: "apexcharts"
      },
      {
        id: 17,
        label: "t-funnel",
        link: "/charts/apex-funnel",
        parentId: "apexcharts"
      },
      {
        id: 7,
        label: "t-candlstick",
        link: "/charts/apex-candlestick",
        parentId: "apexcharts"
      },
      {
        id: 8,
        label: "t-boxplot",
        link: "/charts/apex-boxplot",
        parentId: "apexcharts"
      },
      {
        id: 9,
        label: "t-bubble",
        link: "/charts/apex-bubble",
        parentId: "apexcharts"
      },
      {
        id: 10,
        label: "t-scatter",
        link: "/charts/apex-scatter",
        parentId: "apexcharts"
      },
      {
        id: 11,
        label: "t-heatmap",
        link: "/charts/apex-heatmap",
        parentId: "apexcharts"
      },
      {
        id: 12,
        label: "t-treemap",
        link: "/charts/apex-treemap",
        parentId: "apexcharts"
      },
      {
        id: 13,
        label: "t-pie",
        link: "/charts/apex-pie",
        parentId: "apexcharts"
      },
      {
        id: 14,
        label: "t-radialbar",
        link: "/charts/apex-radialbar",
        parentId: "apexcharts"
      },
      {
        id: 15,
        label: "t-radar",
        link: "/charts/apex-radar",
        parentId: "apexcharts"
      },
      {
        id: 16,
        label: "t-polar-area",
        link: "/charts/apex-polar",
        parentId: "apexcharts"
      }
    ]
  },
  {
    id: "icons",
    label: "t-icons",
    icon: "ph-traffic-cone",
    link: "sidebarIcons",
    subItems: [
      { id: 1, label: "t-remix", link: "/icons/remix", parentId: "icons" },
      {
        id: 2,
        label: "t-boxicons",
        link: "/icons/boxicons",
        parentId: "icons"
      },
      {
        id: 3,
        label: "t-material-design",
        link: "/icons/materialdesign",
        parentId: "icons"
      },
      {
        id: 4,
        label: "t-bootstrap",
        link: "/icons/bootstrap",
        parentId: "icons"
      },
      { id: 5, label: "t-phosphor", link: "/icons/phosphor", parentId: "icons" }
    ]
  },
  {
    id: "maps",
    label: "t-maps",
    icon: "ph-map-trifold",
    link: "sidebarMaps",
    subItems: [
      { id: 1, label: "t-google", link: "/maps/google", parentId: "maps" }
    ]
  },

  {
    id: "multilevel",
    label: "t-multi-level",
    icon: "bi bi-share",
    link: "sidebarMultilevel",
    subItems: [
      {
        id: "level1.1",
        label: "t-level-1.1",
        link: "/#",
        parentId: "multilevel"
      },
      {
        id: "level1.2",
        label: "t-level-1.2",
        link: "sidebarAccount",
        isChildItem: true,
        childItems: [
          { id: 1, label: "t-level-2.1", link: "/#" },
          {
            id: "level2.2",
            label: "t-level-2.2",
            link: "sidebarCrm",
            isChildItem: true,
            childItems: [
              { id: 1, label: "t-level-3.1", link: "/#" },
              { id: 2, label: "t-level-3.2", link: "/#" }
            ]
          }
        ]
      }
    ]
  }
];

export default horMenu;
