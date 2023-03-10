const createTile = index => {
  const tile = document.createElement('div');
  tile.classList.add("tile");
  tile.onclick = e => handleOnClick(index)
  return tile ;
}

const createTiles = quantity => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
}


const createGrid = () => {
  var wrapper = document.getElementById("wrapper")
  wrapper.innerHTML = ""
  
  const columns = Math.floor(document.body.clientWidth / 50);
  const rows = Math.floor(document.body.clientHeight / 50);
  wrapper.style.setProperty("--rows", rows)
  wrapper.style.setProperty("--columns", columns)
  
  createTiles(rows * columns)
}

createGrid()
window.onresize = () => createGrid()

const colors = [
  "rgb(299, 57, 53)",
  "rgb(253, 216, 53)",
  "rgb(244, 81, 30)",
  "rgb(76, 175, 80)",
  "rgb(33, 150, 243)",
  "rgb(156, 39, 176)"
]


let c = 0
let tog = false
const handleOnClick= index => {
  const columns = Math.floor(document.body.clientWidth / 50);
  const rows = Math.floor(document.body.clientHeight / 50);
  c = c + 1
  console.log(colors[c % (colors.length-1)])
  tog = !tog
  anime({
    targets:".tile",
    // backgroundColor: colors[c % (colors.length-1)],
    opacity: tog ? 0 : 1,
    delay: anime.stagger(50, {
      grid:[columns, rows],
      from: index
    })
  })
}
