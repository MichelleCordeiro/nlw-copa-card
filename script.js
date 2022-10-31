let isIgnite = false

function changeCard(event) {
  const card = event.currentTarget
  const curso = isIgnite ? 'explorer' : 'ignite'
  isIgnite = !isIgnite
  card.style.backgroundImage = `url(./assets/bg-${curso}.svg)`
}
