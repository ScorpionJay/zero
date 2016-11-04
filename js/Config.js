const serviceUrl = 'http://192.16.2.85:18080/'

export default {
  initTab:'home',
  loginUrl: serviceUrl+'admin/login2',
  registerUrl: serviceUrl + 'register',
  accountUrl: serviceUrl + 'admin/account',
  accountUrl2: serviceUrl + 'account/user',
  accountSignUrl: serviceUrl + 'account/sign',
  
  fileUrl: serviceUrl + 'file/',
  postsUrl: serviceUrl + 'article/posts',
  postUrl: serviceUrl + 'article/post/',

  pageSize:10,

  postListApi: serviceUrl + 'post/list/',
  postApi: serviceUrl + 'post/add/',

  postApiTest: serviceUrl + 'file/singleSave/',

  postApi2: serviceUrl + 'post/post/',

  postAll: serviceUrl +  'post/lists',

  thumbnailApi: serviceUrl + 'file/thumbnail/',//缩略图


  word:'WORD',
  picture:'PICTURE',

  musicRecommendUrl: serviceUrl + 'music/data/see%20you%20agmain',
  updateAccount: serviceUrl + 'admin/updateAccount',
  fileUpload: serviceUrl + 'admin/photo/upload',

};