import Mock from "mockjs"

// Mock.setup({
//     timeout: 200
// })

const data = Mock.mock({
  image_url:"@image('250x250','#000000','#FFFFFF','png','测试')"
})

Mock.mock("/api/getTeamData", "get", () => {
    return {
        resCode: 200,
        resMsg: "请求成功",
        resData: data
    }
})

