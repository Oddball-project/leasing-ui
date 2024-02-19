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
                    <div class="text-center mt-2">
                      <h5 class="fs-3xl">Forgot Password?</h5>
                      <p class="text-muted mb-4">Reset password with Rodelas</p>
                      <div class="pb-4">
                        <img
                          src="@/assets/images/auth/email.png"
                          alt=""
                          class="avatar-md"
                        />
                      </div>
                    </div>

                    <BAlert
                      :model-value="true"
                      variant="warning"
                      class="border-0 text-center mb-2 mx-2"
                      >Enter your email and instructions will be sent to
                      you!</BAlert
                    >
                    <div class="p-2">
                      <form>
                        <div class="mb-4">
                          <label class="form-label">Email</label>
                          <BFormInput
                            type="email"
                            class="form-control password-input"
                            id="email"
                            placeholder="Enter Email"
                            required
                          />
                        </div>

                        <div class="text-center mt-4">
                          <BButton variant="primary" class="w-100" type="submit"
                            >Send Reset Link</BButton
                          >
                        </div>
                      </form>
                    </div>
                    <div class="mt-4 text-center">
                      <p class="mb-0">
                        Wait, I remember my password...
                        <nuxt-link
                          to="/auth/signin"
                          class="fw-semibold text-primary text-decoration-underline"
                        >
                          Click here
                        </nuxt-link>
                      </p>
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
