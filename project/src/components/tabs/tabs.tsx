import { useState } from 'react';
import { Tab } from '../../types/tabs';

type TabsProps = {
  tabs: Tab[];
}

function Tabs({tabs}: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabs.map((tab, index) => (
            <li
              className={`film-nav__item ${(index === activeTab) ? 'film-nav__item--active' : ''}`}
              key={tab.title}
            >
              <span className="film-nav__link" onClick={() => setActiveTab(index)}>
                {tab.title}
              </span>
            </li>
          ))}
        </ul>
      </nav>
      {tabs[activeTab].content}
    </div>
  );
}

export default Tabs;
