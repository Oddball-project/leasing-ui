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
                    <div class="p-2 mt-4">
                      <div class="text-muted text-center mb-4 pb-2 mx-lg-3">
                        <div class="mb-4">
                          <img
                            src="@/assets/images/auth/permission.png"
                            alt=""
                            class="avatar-md"
                          />
                        </div>
                        <h4>Verify Your Email</h4>
                        <p>
                          Please enter the 4 digit code sent to
                          <span class="fw-semibold">example@abc.com</span>
                        </p>
                      </div>

                      <BForm autocomplete="off">
                        <BRow>
                          <BCol cols="3">
                            <div class="mb-3">
                              <label for="digit1-input" class="visually-hidden"
                                >Digit 1</label
                              >
                              <BFormInput
                                type="text"
                                class="form-control form-control-lg text-center"
                                placeholder="0"
                                onkeyup="moveToNext(1, event)"
                                maxLength="1"
                                id="digit1-input"
                              />
                            </div>
                          </BCol>

                          <BCol cols="3">
                            <div class="mb-3">
                              <label for="digit2-input" class="visually-hidden"
                                >Digit 2</label
                              >
                              <BFormInput
                                type="text"
                                class="form-control form-control-lg text-center"
                                placeholder="0"
                                onkeyup="moveToNext(2, event)"
                                maxLength="1"
                                id="digit2-input"
                              />
                            </div>
                          </BCol>

                          <BCol cols="3">
                            <div class="mb-3">
                              <label for="digit3-input" class="visually-hidden"
                                >Digit 3</label
                              >
                              <BFormInput
                                type="text"
                                class="form-control form-control-lg text-center"
                                placeholder="0"
                                onkeyup="moveToNext(3, event)"
                                maxLength="1"
                                id="digit3-input"
                              />
                            </div>
                          </BCol>

                          <BCol cols="3">
                            <div class="mb-3">
                              <label for="digit4-input" class="visually-hidden"
                                >Digit 4</label
                              >
                              <BFormInput
                                type="text"
                                class="form-control form-control-lg text-center"
                                placeholder="0"
                                onkeyup="moveToNext(4, event)"
                                maxLength="1"
                                id="digit4-input"
                              />
                            </div>
                          </BCol>
                        </BRow>
                      </BForm>
                      <!-- end form -->

                      <div class="mt-3">
                        <BButton variant="primary" class="w-100"
                          >Confirm</BButton
                        >
                      </div>
                    </div>
                    <div class="mt-4 text-center">
                      <p class="mb-0">
                        Didn't receive a code ?
                        <nuxt-link
                          to="/auth/pass-reset"
                          class="fw-semibold text-primary text-decoration-underline"
                          >Resend</nuxt-link
                        >
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
