
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

		

	}

	onInitDone()
	{
		super.onInitDone();
	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}


	onQnaPageClick(comp, info, e)
	{
        // 윈도우 전역에 정의된 값 가져오기
        window.tabView.selectTabById('qna');
	}
}

