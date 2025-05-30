
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
      window.tabView.selectTabById('qna');
	}
}

