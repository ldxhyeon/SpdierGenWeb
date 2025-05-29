
MainSlideView1 = class MainSlideView1 extends AView
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

	}

    // 이미지 클릭시 슬라이드
	onSlideClick2(comp, info, e)
	{
        this.owner.slideTo(1);
	}


	onSlideClick3(comp, info, e)
	{
        this.owner.slideTo(2);
	}
    

    // 화살표 클릭시 슬라이드
	onSlideNextBtn1Click(comp, info, e)
	{

        this.owner.slideNext();

	}

	onSlidePreBtn1Click(comp, info, e)
	{

		this.owner.slidePrev();

	}
}

