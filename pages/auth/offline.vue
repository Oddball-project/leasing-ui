<script>
definePageMeta({
  layout: "custom"
});

</script>

<template>
  <section
    class="auth-page-wrapper py-5 position-relative d-flex align-items-center justify-content-center min-vh-100"
  >
    <BContainer>
      <BRow class="justify-content-center">
        <BCol lg="11">
          <BCard no-body class="mb-0">
            <BRow class="g-0 align-items-center">
              <BCol xxl="5">
                <BCard
                  no-body
                  class="auth-card bg-secondary h-100 border-0 shadow-none d-none d-sm-block mb-0"
                >
                  <BCardBody
                    class="py-5 d-flex justify-content-between flex-column h-100"
                  >
                    <div
                      class="auth-effect-main my-5 position-relative rounded-circle d-flex align-items-center justify-content-center mx-auto"
                    >
                      <div
                        class="effect-circle-1 position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center"
                      >
                        <div
                          class="effect-circle-2 position-relative mx-auto rounded-circle d-flex align-items-center justify-content-center"
                        >
                          <div
                            class="effect-circle-3 mx-auto rounded-circle position-relative text-white fs-4xl d-flex align-items-center justify-content-center"
                          >
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="text-center">
                      <p class="text-white mb-0 mt-3">
                        &copy;
                        {{ new Date().getFullYear() }} Rodelas Residence Space and Leasing.
                      </p>
                      <p class="text-white mb-0 mt-3">
                        Crafted with
                        <i class="mdi mdi-heart text-danger"></i> by Kim Benedict Santiago
                      </p>
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>
              <BCol xxl="6" class="mx-auto">
                <BCard no-body class="mb-0 border-0 shadow-none mb-0">
                  <BCardBody class="p-sm-5 m-lg-4">
                    <div class="mt-2 text-center">
                      <div class="error-img text-center px-5">
                        <img
                          src="@/assets/images/auth/offline-page.gif"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <h3 class="mt-2 fw-semibold">We're Currently Offline</h3>
                      <p class="text-muted mb-4">
                        We can't show you this images because you aren't
                        connected to the internet. When you’re back online
                        refresh the page or hit the button below
                      </p>
                      <!-- <BButton variant="primary" onClick="window.location.href=window.location.href"><i class="ri-refresh-line align-bottom"></i> Refresh</BButton> -->
                    </div>
                  </BCardBody>
                </BCard>
              </BCol>
            </BRow>
          </BCard>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>
