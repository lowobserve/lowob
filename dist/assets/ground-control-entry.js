(() => {
  const boot = document.querySelector(".gc-boot");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (boot) {
    if (reducedMotion || document.documentElement.classList.contains("gc-boot-seen")) {
      boot.remove();
    } else {
      document.body.classList.add("gc-booting");
      try {
        window.sessionStorage.setItem("lowob-gc-entry-seen", "1");
      } catch {}
      window.setTimeout(() => {
        boot.remove();
        document.body.classList.remove("gc-booting");
      }, 1750);
    }
  }

  const form = document.querySelector("#gc-beta-form");
  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    const status = document.querySelector("#gc-beta-status");
    if (!button || !status) return;

    const label = button.textContent;
    let sent = false;
    button.disabled = true;
    button.textContent = "Joining…";
    status.textContent = "";
    status.classList.remove("success", "error");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Beta signup failed");
      sent = true;
      form.reset();
      status.textContent = "Thanks. You’re on the list for Ground Control updates and beta access.";
      status.classList.add("success");
      button.textContent = "Joined";
    } catch {
      status.textContent = "Couldn’t join the beta. Please try again.";
      status.classList.add("error");
    } finally {
      if (!sent) {
        button.disabled = false;
        button.textContent = label;
      }
    }
  });
})();
