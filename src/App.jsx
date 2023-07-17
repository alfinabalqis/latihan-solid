import { createSignal } from 'solid-js';
import banner from './assets/banner.png'
import Card from './components/Card';

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false)

  function toggleTheme(){
    setDarkTheme(!darkTheme())
  }

  return (
    <div class="container m-auto">
      <header 
        class="my-4 p-2 text-xl flex items-center gap-4"
        classList={{"bg-neutral-900": darkTheme(), "text-white": darkTheme()}}
      >
        <span 
          class="material-symbols-outlined cursor-pointer"
          onClick={toggleTheme}>light_mode
        </span>

        <h1>Ninja Merch</h1>
      </header>

      <img class="rounded-md" src={banner} alt="Site Banner" />

      <div class="grid grid-cols-4 gap-10 my-4">
        <Card title="Ninja Tee" rounded={true} flat={false}>
          <h2>Ninja Hatori</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button class="btn">View</button>
        </Card>
        <Card title="Ninja Tote Bag" rounded={false} flat={true}>
          <h2>Ninja Hatori</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Price $10</p>
          <button class="btn">View</button>
        </Card>
      </div>
    </div>
  );
}

export default App;
