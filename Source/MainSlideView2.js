
MainSlideView2 = class MainSlideView2 extends AView
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
	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}


    // 이미지 버튼 클릭시 슬라이드
	onSlideView1Click(comp, info, e)
	{
        this.owner.slideTo(0);
	}

	onSlideView3Click(comp, info, e)
	{
		this.owner.slideTo(2);
	}


    // 화살표 클릭시 슬라이드
	onSlideNextBtn2Click(comp, info, e)
	{

		this.owner.slideNext();

	}

	onSlidePreBtn2Click(comp, info, e)
	{

        this.owner.slidePrev();

	}
}

