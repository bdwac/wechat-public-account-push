/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx960b407d79045ecf',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '8c73e022a78ad229d1eab6afe1ab0f29',

  PROVINCE: '内蒙古',
  CITY: '呼和浩特',

  USERS: [
    {
      // 想要发送的人的名字
      name: '张老师',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'wx960b407d79045ecf',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: ' ToL0yiuP0LZaMHq-8Z2Iz8bXRqHjOQLrXimeT61BPTo',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-24',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '张老师', year: '2002', date: '07-16',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '张老师', year: '2002', date: '08-24',
        },
        
      ],
      
    
    
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: ' ToL0yiuP0LZaMHq-8Z2Iz8bXRqHjOQLrXimeT61BPTo',

  CALLBACK_USERS: [
    {
      name: '张老师',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ocHMv5sdslZyslixBa4wrZ06B178',
    }
  ],

}

module.exports = USER_CONFIG
/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx960b407d79045ecf',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '8c73e022a78ad229d1eab6afe1ab0f29',

  PROVINCE: '内蒙古',
  CITY: '呼和浩特',

  USERS: [
    {
      // 想要发送的人的名字
      name: '张老师',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'wx960b407d79045ecf',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: ' ToL0yiuP0LZaMHq-8Z2Iz8bXRqHjOQLrXimeT61BPTo',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-24',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '张老师', year: '2002', date: '07-16',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '张老师', year: '2002', date: '08-24',
        },
        
      ],
      
    
    
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: ' ToL0yiuP0LZaMHq-8Z2Iz8bXRqHjOQLrXimeT61BPTo',

  CALLBACK_USERS: [
    {
      name: '张老师',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ocHMv5sdslZyslixBa4wrZ06B178',
    }
  ],

}

module.exports = USER_CONFIG


