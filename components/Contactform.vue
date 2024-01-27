<script setup>
onMounted(() => {
  const form = document.getElementById("form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      form.querySelectorAll(":invalid")[0].focus();
      return;
    }
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Sending...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          result.classList.add("text-green-500");
          result.innerHTML = json.message;
        } else {
          console.log(response);
          result.classList.add("text-red-500");
          result.innerHTML = json.message;
        }
      })
      .catch((error) => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
      })
      .then(function () {
        form.reset();
        form.classList.remove("was-validated");
        setTimeout(() => {
          result.style.display = "none";
        }, 5000);
      });
  });
});
</script>

<template>
  <div class="pt-16 pb-8 md:pt-8">
    <Sectionhead>
      <template v-slot:title>{{ $t("contact.contact-me") }}</template>
      <template v-slot:desc>{{ $t("contact.reach-to-me") }}</template>
    </Sectionhead>
  </div>
  <div class="lg:w-3/4 mx-auto">
    <form action="https://api.web3forms.com/submit" method="POST" id="form" class="needs-validation" novalidate>
      <input type="hidden" name="access_key" value="fb6caad2-1669-4035-9890-16dd7ad0e310" />
      <input type="checkbox" class="hidden" style="display: none" name="botcheck" />
      <div class="mb-5">
        <input type="text" :placeholder="$t('contact.full-name')" required
          class="w-full px-4 py-3 border-2 placeholder:text-sky-800 rounded-md outline-none focus:ring-4 border-sky-300 focus:border-sky-600 ring-sky-100"
          name="name" />
        <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
          {{ $t("contact.full-name") }}
        </div>
      </div>
      <div class="mb-5">
        <label for="email_address" class="sr-only">{{ $t("contact.email-address") }}</label><input id="email_address"
          type="email" :placeholder="$t('contact.email-address')" name="email" required
          class="w-full px-4 py-3 border-2 placeholder:text-sky-800 rounded-md outline-none focus:ring-4 border-sky-300 focus:border-sky-600 ring-sky-100" />
        <div class="empty-feedback text-red-400 text-sm mt-1">
          {{ $t("contact.provide-email-address") }}
        </div>
      </div>
      <div class="mb-3">
        <textarea name="message" required :placeholder="$t('contact.your-message')"
          class="w-full px-4 py-3 border-2 placeholder:text-sky-800 rounded-md outline-none h-36 focus:ring-4 border-sky-300 focus:border-sky-600 ring-sky-100"></textarea>
        <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
          {{ $t("contact.enter-message") }}
        </div>
      </div>
      <Button type="submit" size="lg" block>{{ $t("contact.send-message") }}</Button>
      <div id="result" class="mt-3 text-center"></div>
    </form>
  </div>
</template>

<style>
.invalid-feedback,
.empty-feedback {
  display: none;
}

.was-validated :placeholder-shown:invalid~.empty-feedback {
  display: block;
}

.was-validated :not(:placeholder-shown):invalid~.invalid-feedback {
  display: block;
}

.is-invalid,
.was-validated :invalid {
  border-color: #dc3545;
}
</style>
