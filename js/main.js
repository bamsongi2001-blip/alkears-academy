const elements = {
  fire: {name:"불 속성", label:"PRIMARY ATTRIBUTE · 01", symbol:"♨", description:"화염을 다루는 전공. 4학년 진학 시 단독 심화인 태양 또는 땅 속성과 결합하는 용암을 선택할 수 있습니다.", tags:["기본 스킬 5개","태양 · 용암"]},
  water:{name:"물 속성",label:"PRIMARY ATTRIBUTE · 02",symbol:"♧",description:"물의 흐름과 형태를 다루는 전공. 4학년 진학 시 바람 속성과 복수전공하면 얼음, 불 속성과 복수전공하면 안개를 선택할 수 있습니다.",tags:["기본 스킬 5개","얼음 · 안개"]},
  earth:{name:"땅 속성",label:"PRIMARY ATTRIBUTE · 03",symbol:"◇",description:"대지와 광물의 힘을 다루는 전공. 재련술을 수강하면 금속 속성을, 땅 속성 마스터를 선택하면 전공 스킬을 추가로 습득합니다.",tags:["기본 스킬 5개","금속 · 땅 마스터"]},
  wind:{name:"바람 속성",label:"PRIMARY ATTRIBUTE · 04",symbol:"〰",description:"바람의 흐름을 다루는 전공. 4학년 진학 시 바람 속성 마스터를 선택할 수 있으며 스킬 개수가 2개 증가합니다.",tags:["기본 스킬 5개","바람 마스터"]},
  wood:{name:"나무 속성",label:"PRIMARY ATTRIBUTE · 05",symbol:"❋",description:"생명과 식물의 힘을 다루는 전공. 연금술을 수강하면 독 속성을, 선행 스탯 200을 달성하면 치유 속성을 해금할 수 있습니다.",tags:["기본 스킬 5개","독 · 치유"]},
};
const tabs = document.querySelectorAll(".element-tab");
const detail = document.getElementById("elementDetail");
tabs.forEach(tab => tab.addEventListener("click", () => {
  tabs.forEach(t => {t.classList.remove("active"); t.setAttribute("aria-selected","false");});
  tab.classList.add("active"); tab.setAttribute("aria-selected","true");
  const item = elements[tab.dataset.element];
  detail.innerHTML = `<div class="element-orb ${tab.dataset.element}-orb">${item.symbol}</div><div><span class="detail-label">${item.label}</span><h3>${item.name}</h3><p>${item.description}</p><div class="detail-tags">${item.tags.map(t=>`<span>${t}</span>`).join("")}</div></div>`;
}));
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open"); menuToggle.setAttribute("aria-expanded","false");
}));
document.getElementById("letterButton").addEventListener("click", () => {
  const result = document.getElementById("letterResult");
  result.hidden = !result.hidden;
  document.getElementById("letterButton").innerHTML = result.hidden ? '입학장 확인하기 <span>→</span>' : '입학장 닫기 <span>↑</span>';
  if(!result.hidden) result.scrollIntoView({behavior:"smooth",block:"center"});
});
