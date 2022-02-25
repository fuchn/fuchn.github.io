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
                        {
                            UserID:2,
                            CommentContent:"456",
                            CommentFloor:0,
                            CommentUpvote:1,
                            CommentDate:"2022-01-02 11:01:23"
                        }
                    ]
                },
                {
                    UserID:2,
                    PostContent:"456",
                    PostFloor:0,
                    PostUpvote:0,
                    PostDate:'2022-02-12 11:45:48',
                    Comments:[
                        {
                            UserID:1,
                            CommentContent:"123",
                            CommentDate:"2022-01-01 11:01:23",

                        },
                        {
                            UserID:2,
                            CommentContent:"456",
                            CommentDate:"2022-01-02 11:01:23"
                        }
                    ]
                }
            ]
        }
    }                
    },
    methods: {
        order(m){
        this.objs.PostNodes.sort(function compare(a,b){
            if(m){
            return a.PostDate < b.PostDate ? -1 : 1
            }else{
            return a.PostDate > b.PostDate ? -1 : 1
            }
        })
        },
        fold(){
            this.classname=!this.classname
        }
    },
    computed:{
        filterarray(){
            return this.objs.PostNodes.filter((a)=>{
            return a.PostContent.indexOf(this.keyWord)>=0
            })
        }
    }
})