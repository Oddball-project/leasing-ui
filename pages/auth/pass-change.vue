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
                    <div class="text-center">
                      <h5 class="fs-3xl">Create new password</h5>
                      <p class="text-muted mb-5">
                        Your new password must be different from previous used
                        password.
                      </p>
                    </div>

                    <div class="p-2">
                      <form action="/">
                        <div class="mb-3">
                          <label class="form-label" for="password-input"
                            >Password</label
                          >
                          <div class="position-relative auth-pass-inputgroup">
                            <BFormInput
                              type="password"
                              class="form-control pe-5 password-input"
                              onpaste="return false"
                              placeholder="Enter password"
                              id="password-input"
                              aria-describedby="passwordInput"
                              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                              required
                            />
                            <BButton
                              variant="link"
                              class="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                              id="password-addon"
                              ><i class="ri-eye-fill align-middle"></i
                            ></BButton>
                          </div>
                          <div id="passwordInput" class="form-text">
                            Your password must be 8-20 characters long.
                          </div>
                        </div>

                        <div class="mb-3">
                          <label class="form-label" for="confirm-password-input"
                            >Confirm Password</label
                          >
                          <div
                            class="position-relative auth-pass-inputgroup mb-3"
                          >
                            <BFormInput
                              type="password"
                              class="form-control pe-5 password-input"
                              onpaste="return false"
                              placeholder="Confirm password"
                              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                              id="confirm-password-input1"
                              required
                            />
                            <BButton
                              variant="link"
                              class="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                              type="button"
                              id="confirm-password-input2"
                              ><i class="ri-eye-fill align-middle"></i
                            ></BButton>
                          </div>
                        </div>

                        <div
                          id="password-contain"
                          class="p-3 bg-light mb-2 rounded"
                        >
                          <h5 class="fs-sm">Password must contain:</h5>
                          <p id="pass-length" class="invalid fs-xs mb-2">
                            Minimum <b>8 characters</b>
                          </p>
                          <p id="pass-lower" class="invalid fs-xs mb-2">
                            At <b>lowercase</b> letter (a-z)
                          </p>
                          <p id="pass-upper" class="invalid fs-xs mb-2">
                            At least <b>uppercase</b> letter (A-Z)
                          </p>
                          <p id="pass-number" class="invalid fs-xs mb-0">
                            A least <b>number</b> (0-9)
                          </p>
                        </div>

                        <div class="form-check form-check-primary">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="auth-remember-check"
                          />
                          <label
                            class="form-check-label"
                            for="auth-remember-check"
                            >Remember me</label
                          >
                        </div>

                        <div class="mt-4">
                          <BButton variant="primary" class="w-100" type="submit"
                            >Reset Password</BButton
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
