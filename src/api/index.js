import request from '@/utils/request'

// 获取轮播图
export const getLunBotu = () => {
  return request({
    url: '/api/getlunbo',
    method: 'GET'
  }).then(res => res)
}

// 获取新闻列表
export const getNewList = () => {
  return request({
    url: '/api/getnewslist',
    method: 'GET'
  }).then(res => res.data)
}

// 获取新闻详情
export const getNews = (id) => {
  return request({
    url: '/api/getnew/' + id,
    method: 'GET'
  }).then(res => res.data)
}
// 获取评论列表
export const getComments = (artid = 1, pageindex = 1) => {
  return request({
    url: `/api/getcomments/${artid}?pageindex=${pageindex}`,
    method: 'GET'
  }).then(res => res.data)
}

// 发表评论
export const addComment = (artid, content) => {
  return request({
    url: `/api/postcomment/${artid}`,
    method: 'POST',
    data: {
      content
    }
  }).then(res => res.data)
}

// 图片分类数据
export const getImgCategory = () => {
  return request({
    url: `/api/getimgcategory`,
    method: 'GET'
  }).then(res => res.data)
}

// 图片列表数据
export const getImagesList = (cateid) => {
  return request({
    url: `/api/getimages/${cateid}`,
    method: 'GET'
  }).then(res => res.data)
}

// 获取图片详情shuj
export const getImageInfo = (imgid) => {
  return request({
    url: `/api/getimageInfo/${imgid}`,
    method: 'GET'
  }).then(res => res.data)
}
// 图片分享详情中的缩略图
export const getThumimages = (imgid) => {
  return request({
    url: `/api/getthumimages/${imgid}`,
    method: 'GET'
  }).then(res => res.data)
}

// 获取商品列表
export const getGoods = (pageindex = 1) => {
  return request({
    url: `/api/getgoods?pageindex=${pageindex}`,
    method: 'GET'
  }).then(res => res.data)
}

// 获取商品参数
export const getGoodinfo = (id) => {
  return request({
    url: `/api/goods/getinfo/${id}`,
    method: 'GET'
  }).then(res => res.data)
}

// 获取图文数据
export const getGoodsDesc = (id) => {
  return request({
    url: `/api/goods/getdesc/${id}`,
    method: 'GET'
  }).then(res => res.data)
}
