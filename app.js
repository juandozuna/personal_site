// Update this list whenever a payment changes.
// Valid payment methods: "Transferencia bancaria", "Efectivo", or null.
const payments = [
  {
    name: "Jorge Sanchez",
    owed: 750,
    paid: 750,
    method: "Transferencia bancaria",
    note: "Incluye RD$300 de comida",
  },
  {
    name: "Luis Rodríguez",
    owed: 450,
    paid: 450,
    method: "Transferencia bancaria",
    note: "Entrada de la película",
  },
  {
    name: "Brianna Tejada",
    owed: 450,
    paid: 450,
    method: "Transferencia bancaria",
    note: "Entrada de la película",
  },
  {
    name: "Camila Gómez",
    owed: 450,
    paid: 450,
    method: "Transferencia bancaria",
    note: "Entrada de la película",
  },
  {
    name: "Daniel Rodríguez",
    owed: 450,
    paid: 450,
    method: "Transferencia bancaria",
    note: "Entrada de la película",
  },
  {
    name: "Emil Sánchez",
    owed: 450,
    paid: 450,
    method: "Transferencia bancaria",
    note: "Entrada de la película",
  },
  {
    name: "Jason Guillen",
    owed: 450,
    paid: 450,
    method: "Transferencia bancaria",
    note: "Entrada de la película",
  },
  {
    name: "José Gabriel Gil",
    owed: 450,
    paid: 450,
    method: "Transferencia bancaria",
    note: "Entrada de la película",
  },
  {
    name: "Víctor Gil",
    owed: 750,
    paid: 0,
    method: null,
    note: "Incluye RD$300 de comida",
  },
  {
    name: "Marcos Guillen",
    owed: 450,
    paid: 450,
    method: "Transferencia bancaria",
    note: "Entrada de la película",
  },
];

const lastUpdated = new Date("2026-07-27T09:14:00-04:00");
const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "DOP",
  currencyDisplay: "narrowSymbol",
  maximumFractionDigits: 0,
});

const formatMoney = (amount) => money.format(amount).replace("$", "RD$");
const isPaid = (payment) => payment.paid >= payment.owed;
const initials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const icons = {
  cash: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16v10H4z"/>
      <circle cx="12" cy="12" r="2.5"/>
      <path d="M7 10V9h1m9 1V9h-1M7 14v1h1m9-1v1h-1"/>
    </svg>`,
  bank: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m4 9 8-4 8 4M5 19h14M7 10v6m3-6v6m4-6v6m3-6v6"/>
    </svg>`,
  unknown: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8"/>
      <path d="M9.8 9.5a2.4 2.4 0 0 1 4.7.7c0 1.8-2.5 2-2.5 3.5M12 16.5h.01"/>
    </svg>`,
  waiting: `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8"/>
      <path d="M12 8v4.5l3 1.5"/>
    </svg>`,
};

const methodMarkup = (payment) => {
  if (!payment.paid) {
    return `${icons.waiting}<span>Aún no pagado</span>`;
  }

  if (payment.method === "Efectivo") {
    return `${icons.cash}<span>Efectivo</span>`;
  }

  if (payment.method === "Transferencia bancaria") {
    return `${icons.bank}<span>Transferencia bancaria</span>`;
  }

  return `${icons.unknown}<span>Método por confirmar</span>`;
};

const rowMarkup = (payment, index) => {
  const status = isPaid(payment) ? "paid" : "pending";
  const statusLabel = status === "paid" ? "Pagado" : "Pendiente";

  return `
    <article class="payment-row" data-status="${status}" style="animation-delay: ${index * 35}ms">
      <div class="person">
        <span class="avatar" aria-hidden="true">${initials(payment.name)}</span>
        <div>
          <p class="person__name">${payment.name}</p>
          <p class="person__note">${payment.note}</p>
        </div>
      </div>
      <span class="status status--${status}">${statusLabel}</span>
      <p class="amount">
        ${formatMoney(payment.paid)}
        <span class="amount__due">de ${formatMoney(payment.owed)}</span>
      </p>
      <div class="method ${payment.method ? "" : "method--unknown"}">
        ${methodMarkup(payment)}
      </div>
    </article>`;
};

const totals = payments.reduce(
  (result, payment) => ({
    expected: result.expected + payment.owed,
    collected: result.collected + payment.paid,
    paidCount: result.paidCount + Number(isPaid(payment)),
  }),
  { expected: 0, collected: 0, paidCount: 0 },
);

const pendingCount = payments.length - totals.paidCount;
const outstanding = totals.expected - totals.collected;
const progress = Math.round((totals.collected / totals.expected) * 100);

document.querySelector("#collected-total").textContent = formatMoney(totals.collected);
document.querySelector("#expected-total").textContent = `de ${formatMoney(totals.expected)}`;
document.querySelector("#progress-percent").textContent = `${progress}%`;
document.querySelector("#paid-count").textContent = totals.paidCount;
document.querySelector("#pending-count").textContent = pendingCount;
document.querySelector("#outstanding-total").textContent = formatMoney(outstanding);
document.querySelector("#people-count").textContent = payments.length;
document.querySelector("#all-filter-count").textContent = payments.length;
document.querySelector("#paid-filter-count").textContent = totals.paidCount;
document.querySelector("#pending-filter-count").textContent = pendingCount;
document.querySelector("#updated-date").textContent = new Intl.DateTimeFormat("es-DO", {
  day: "numeric",
  month: "short",
  year: "numeric",
}).format(lastUpdated);

const progressBar = document.querySelector("#progress-bar");
const progressElement = document.querySelector(".progress");
progressElement.setAttribute("aria-valuenow", progress);
requestAnimationFrame(() => {
  progressBar.style.width = `${progress}%`;
});

const rows = document.querySelector("#payment-rows");
const emptyState = document.querySelector("#empty-state");

const renderPayments = (filter = "all") => {
  const visiblePayments = payments.filter((payment) => {
    if (filter === "paid") return isPaid(payment);
    if (filter === "pending") return !isPaid(payment);
    return true;
  });

  rows.innerHTML = visiblePayments.map(rowMarkup).join("");
  emptyState.hidden = visiblePayments.length > 0;
};

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter.is-active")?.classList.remove("is-active");
    button.classList.add("is-active");
    renderPayments(button.dataset.filter);
  });
});

const tabs = [...document.querySelectorAll(".view-tab")];

const selectTab = (selectedTab, updateUrl = false) => {
  tabs.forEach((tab) => {
    const isSelected = tab === selectedTab;
    tab.classList.toggle("is-active", isSelected);
    tab.setAttribute("aria-selected", isSelected);
    tab.tabIndex = isSelected ? 0 : -1;
    document.querySelector(`#${tab.dataset.tab}`).hidden = !isSelected;
  });

  if (updateUrl) {
    const nextUrl =
      selectedTab.id === "invoice-tab"
        ? `${window.location.pathname}${window.location.search}#factura`
        : `${window.location.pathname}${window.location.search}`;
    window.history.replaceState(null, "", nextUrl);
  }
};

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTab(tab, true));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;

    event.preventDefault();
    let nextIndex;
    if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = tabs.length - 1;
    else {
      const direction = event.key === "ArrowRight" ? 1 : -1;
      nextIndex = (index + direction + tabs.length) % tabs.length;
    }

    tabs[nextIndex].focus();
    selectTab(tabs[nextIndex], true);
  });
});

const showLinkedTab = () => {
  if (window.location.hash === "#factura") {
    selectTab(document.querySelector("#invoice-tab"));
  }
};

window.addEventListener("hashchange", showLinkedTab);
document.querySelector("#print-ticket").addEventListener("click", () => window.print());

showLinkedTab();
renderPayments();
