
QnaPageView = class QnaPageView extends AView
{
	constructor()
	{
		super()

		//TODO:edit here

	}

	init(context, evtListener)
	{
		super.init(context, evtListener)

        this.listData = [
            { img : 'Assets/img/ic_login.png', 
              title : '스파이더젠 4 내부 api docs 및 자동완성 메소드 설명 및 에제보는기능', 
              date : '2024/09/04',
              name : 'kisung125'
            },

            { img : 'Assets/img/ic_login.png', 
              title : '스파이더젠 4 내부 api docs 및 자동완성 메소드 설명 및 에제보는기능', 
              date : '2024/09/04',
              name : 'kisung123'
            },

            { img : 'Assets/img/ic_login.png', 
              title : '스파이더젠 4 내부 api docs 및 자동완성 메소드 설명 및 에제보는기능', 
              date : '2024/09/04',
              name : 'kisung123'
            },

            { img : 'Assets/img/ic_login.png', 
              title : '스파이더젠 4 내부 api docs 및 자동완성 메소드 설명 및 에제보는기능', 
              date : '2024/09/04',
              name : 'kisung123'
            },

            { img : 'Assets/img/ic_login.png', 
              title : '스파이더젠 4 내부 api docs 및 자동완성 메소드 설명 및 에제보는기능', 
              date : '2024/09/04',
              name : 'kisung123'
            },

            { img : 'Assets/img/ic_login.png', 
              title : '스파이더젠 4 내부 api docs 및 자동완성 메소드 설명 및 에제보는기능', 
              date : '2024/09/04',
              name : 'kisung123'
            },

            { img : 'Assets/img/ic_login.png', 
              title : '스파이더젠 4 내부 api docs 및 자동완성 메소드 설명 및 에제보는기능', 
              date : '2024/09/04',
              name : 'kisung123'
            },

            { img : 'Assets/img/ic_login.png', 
              title : '스파이더젠 4 내부 api docs 및 자동완성 메소드 설명 및 에제보는기능', 
              date : '2024/09/04',
              name : 'kisung123'
            },

            { img : 'Assets/img/ic_login.png', 
              title : '스파이더젠 4 내부 api docs 및 자동완성 메소드 설명 및 에제보는기능', 
              date : '2024/09/04',
              name : 'kisung123'
            },

            { img : 'Assets/img/ic_login.png', 
              title : '스파이더젠 4 내부 api docs 및 자동완성 메소드 설명 및 에제보는기능', 
              date : '2024/09/04',
              name : 'kisung123'
            },
        ];

	}

	onInitDone()
	{
		super.onInitDone()

        this.listView.addItem('Source/community/ListViewItem.lay', this.listData);

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}

}

