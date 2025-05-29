
MainSlideView3 = class MainSlideView3 extends AView
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


    // 이미지 클릭 시 슬라이드
	onSlideView2Click(comp, info, e)
	{

		this.owner.slideTo(1);

	}

	onSlideView1Click(comp, info, e)
	{

        this.owner.slideTo(0);

	}

    // 버튼 클릭시 슬라이드
	onSlideNextBtn3Click(comp, info, e)
	{

        this.owner.slideNext();

	}

	onSlidePreBtn3Click(comp, info, e)
	{

        this.owner.slidePrev();

	}
}

