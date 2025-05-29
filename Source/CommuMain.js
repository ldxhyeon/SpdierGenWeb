
CommuMain = class CommuMain extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

		//TODO:edit here

	}

	onInitDone()
	{
		super.onInitDone();


        //url 대신 null 을 셋팅하면 빈 컨테이너가 뷰내부에 생성된다. 컨테이너 아이디는 생략 가능
        //loadContainer 는 비동기 함수이므로 then 을 사용하거나 async, await 를 사용해야 한다.

        // console.log(this.findCompById('commuNavi'));
        this.commuNavi.loadContainer('Source/community/CommuMain.lay').then(cntr => {

            let navi = new ANavigator();

            navi.registerPage('Source/community/QnaPageView.lay', 'qnaPage');
         
        })

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}


	onQnaPageClick(comp, info, e)
	{
        let navi = this.getContainer().navigator;
        navi.goPage('qnaPage');

        //  console.log(this.commuNavi);
	}
}

