
MainSubView = class MainSubView extends AView
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
		super.onInitDone()

		 // 슬라이드 뷰 추가
        this.mainSlideView.addItem('Source/main/MainSlideView1.lay', [1]);
        this.mainSlideView.addItem('Source/main/MainSlideView2.lay', [2]);
        this.mainSlideView.addItem('Source/main/MainSlideView3.lay', [3]);
	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

}

