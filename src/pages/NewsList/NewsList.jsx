import React from 'react'
import axios from 'axios'
import Breadcrumbs from '../../shared/Breadcrumbs/Breadcrumbs'
import Newscard from '../../shared/Newscard/Newscard'

import s from './NewsList.module.scss'

const NewsList = () => {
	const [news, setNews] = React.useState([]);

	React.useEffect(() => {
		const urlNews = ``

        axios.get(`https://62e980cd01787ec7121910b3.mockapi.io/newsList?${urlNews}`)
		.then((response) => {setNews(response.data)});
    }, []);
	
	return (
		<div className={s.newsListWrapper}>
			<Breadcrumbs/>
			<div className={s.newsList}>
				{news.map((obj, i) => (
					<Newscard {...obj}
					key={obj.id}
					/>
				))}
			</div>
		</div>
  )
}

export default NewsList