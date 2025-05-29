
MainView = class MainView extends AView
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

        this.tabView.addTab('탑', 'Source/main/TopView.lay', 'top');

		this.tabView.selectTabById('top');

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}


	onAView1Click(comp, info, e)
	{

		//TODO:edit here

	}
}

