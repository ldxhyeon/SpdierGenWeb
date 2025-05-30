
ListViewItem = class ListViewItem extends AView
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

		//TODO:edit here

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

     setData(data)
    {
        this.qnaImage.setBackgroundImage(data.img);
        this.qnaName.setText(data.name);
        this.qnaTitle.setText(data.title);
        this.qnaDate.setText(data.date);

        this.data = data;
    }

}

