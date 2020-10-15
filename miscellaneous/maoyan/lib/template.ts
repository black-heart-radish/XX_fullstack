interface IMovie {
    img: string;
    title: string;
    content: string;
}

type IMovieListFunc = (movie: IMovie) => string;
const getMovieListTemplate :IMovieListFunc = (movie) => `
    <a href="javascript:" class="weui-media-box weui-media-box_appmsg">
        <div class="weui-media-box__hd" id="weui-media-box__hd">
               <img class="weui-media-box__thumb" id="weui-media-box__thumb" src="${movie.img}" alt="">
        </div>
        <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title">${movie.title}</h4>
            <p class="weui-media-box__desc">${movie.content}</p>
        </div>
        <span href="javascript:" class="weui-btn weui-btn_mini weui-btn_primary" id="weui-btn">购票</span>
    </a>
`