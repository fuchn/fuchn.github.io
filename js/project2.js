new Vue({
    el:"#app",
    data() {
        return {
            temp:false,
            keyWord:"",
            classname:true,
            objs:{
                PostID:1,
                PostTitle:"123",
                PostTotal:2,
                Upvote:0,
                PostOwner:"li",
                Date:'2022-02-11 11:45:43',
                PostNodes:[
                {
                    UserID:1,
                    PostContent:"123",
                    PostFloor:0,
                    PostUpvote:1,
                    PostDate:'2022-02-11 11:45:43',
                    Comments:[
                        {
                            UserID:1,
                            CommentContent:"123",
                            CommentFloor:0,
                            CommentUpvote:1,
                            CommentDate:'2022-02-11 11:45:43',
                        },
                    ]
                },
            ]
            },
        }                
    },
    methods: {
        order(m){
        this.objs.PostNodes.sort(function compare(a,b){
            if(m){
            return a.PostDate < b.PostDate ? -1 : 1//按时间正序
            }else{
            return a.PostDate > b.PostDate ? -1 : 1//按时间倒序
            }
        })
        },//按时间排序的函数
        fold(){
            this.classname=!this.classname
        },
    },
    mounted(){
        var xhr= new XMLHttpRequest()
        xhr.open('GET','http://127.0.0.1:4523/mock/593055/posts');
        xhr.send();
        xhr.onreadystatechange = () => {//使用箭头函数使this指向Vue
        if(xhr.readyState === 4){
            if(xhr.status>=200 && xhr.status<300){
                this.objs=JSON.parse(xhr.response);//将响应体的json数据转化为对象并赋值给dada中的数据
            }
        }
        }
    },
    computed:{
        filterarray(){//用于筛选，搜索的函数，返回包含关键词的结果
            return this.objs.PostNodes.filter((a)=>{
            return a.PostContent.indexOf(this.keyWord)>=0
            })
        }
    }
})