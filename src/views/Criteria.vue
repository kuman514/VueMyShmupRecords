<template>
  <div class="criteria">
    <h1>Record Criteria (기록 기준)</h1>
    <ul class="aligning-criteria">
      <li>
        정품 아케이드 기판을 사용한 오락실에서 플레이 (ex: 부천 신중동 아카트로닉스)<br>
        (정품 아케이드 기판을 사용한 오락실에서 플레이 (ex: 부천 신중동 아카트로닉스))
      </li>
      <li>
        Steam에서 보유 중인 게임을 플레이<br>
        (Steam에서 보유 중인 게임을 플레이)
      </li>
      <li>
        Arcade Archives나 Capcom Arcade Stadium 등등의 정식 복각판에서 플레이<br>
        (Arcade Archives나 Capcom Arcade Stadium 등등의 정식 복각판에서 플레이)
      </li>
      <li>
        이외의 정품 플레이 기록 (ex: 케츠이 Deathtiny PS4판)<br>
        (이외의 정품 플레이 기록 (ex: 케츠이 Deathtiny PS4판))
      </li>
    </ul>
  </div>
</template>

<style scoped>
.criteria {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.aligning-criteria {
  text-align: left;
}

@media (orientation: landscape) {
  .aligning-criteria {
    max-width: 800px;
  }
}
</style>
