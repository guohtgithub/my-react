import mock from 'mockjs'

const Random = mock.Random
const produceNewData = () => {
  let articles = []
  for(let i=0;i<10;i++){
    let newArticleObj = {
      title:Random.csentence(5,10),
      thumbnail_pic:Random.image('150*100','#894FC4',"#FFF",'png','mock'),
      author_name:Random.cname(),
      date:Random.date() + ' ' + Random.time()
    }
    articles.push(newArticleObj)
  }
  return articles
}
mock.mock('/article/list','get',produceNewData)