import Button from "./Button";
import "./page.scss";

const fetchQuotes= async() => {
  const url = "https://dummyjson.com/quotes";
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.quotes;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Quotes() {
  const quotes = await fetchQuotes();

  return (
    <>
      <h1>Quotes</h1>
      <div className="main-container">
        {quotes.map((item) => (
          <div className="container" key={item.id}>
            <p>{item.quote}</p>
            <Button author={item.author} />
          </div>
        ))}
      </div>
    </>
  );
}
