import React from 'react';

type CategoriesProps = {
  value: number;
  onClickCategory: (i: number) => void;
}

const categories: string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories: React.FC<CategoriesProps> = React.memo(({ value, onClickCategory }) => {

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => {
          return (
            <li key={i} className={value === i ? 'active' : ''} onClick={() => onClickCategory(i)}>
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
})
