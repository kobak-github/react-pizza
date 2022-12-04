import React from "react"

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => {
          return(
            <li className={activeIndex === i ? "active" : ""} onClick={() => setActiveIndex(i)}>
              {value}
             </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Categories