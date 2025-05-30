
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

        window.tabView = this.tabView;

        // 탭뷰 메인 등록
        this.tabView.addTab('메인', 'Source/main/MainSubView.lay', 'main');
        this.tabView.addTab('도큐', 'Source/blank/BlankView.lay', 'docu');
        this.tabView.addTab('커뮤', 'Source/community/CommuMain.lay', 'commu');
        this.tabView.addTab('다운', 'Source/blank/BlankView.lay', 'down');
        this.tabView.addTab('회사', 'Source/company/CompanyView.lay', 'company');
        this.tabView.addTab('화상', 'Source/blank/BlankView.lay', 'video');
        this.tabView.addTab('구름', 'Source/blank/BlankView.lay', 'cloud');
        this.tabView.addTab('wts', 'Source/blank/BlankView.lay', 'wts');
        this.tabView.addTab('회원가입', 'Source/main/RegisterView.lay', 'register');
        this.tabView.addTab('질의응답', 'Source/community/QnaPageView.lay', 'qna');

		this.tabView.selectTabById('main');

        // 헤더 라디오버튼
        this.rbm = new RadioBtnManager(this);

	}

	onActiveDone(isFirst)
	{
		super.onActiveDone(isFirst)

		//TODO:edit here

	}


	// ************* 탭뷰 및 라디오 *************

    onMainPageClick(comp, info, e)
	{
        this.tabView.selectTabById('main');
        this.rbm.selectButton(comp);
	}

    onDocuPageClick(comp, info, e)
	{
        this.tabView.selectTabById('docu');
         // 선택된 버튼 스타일 지정
        this.rbm.selectButton(comp);
	}

	onCommuPageClick(comp, info, e)
	{
        this.tabView.selectTabById('commu');
        // 선택된 버튼 스타일 지정
        this.rbm.selectButton(comp);
	}

  

	onDownPageClick(comp, info, e)
	{
		this.tabView.selectTabById('down');
        // 선택된 버튼 스타일 지정
        this.rbm.selectButton(comp);
	}

	onCompanyPageClick(comp, info, e)
	{
		this.tabView.selectTabById('company');
        // 선택된 버튼 스타일 지정
        this.rbm.selectButton(comp);
	}

	onVideoPageClick(comp, info, e)
	{
		this.tabView.selectTabById('video');
        // 선택된 버튼 스타일 지정
        this.rbm.selectButton(comp);
	}

	onCloudPageClick(comp, info, e)
	{
		this.tabView.selectTabById('cloud');
        // 선택된 버튼 스타일 지정
        this.rbm.selectButton(comp);
	}

	onWtsPageClick(comp, info, e)
	{
		this.tabView.selectTabById('wts');
        // 선택된 버튼 스타일 지정
        this.rbm.selectButton(comp);
	}

    onRegisterBtnClick(comp, info, e)
	{
        this.tabView.selectTabById('register');
	}

    // ************* 탭뷰 및 라디오 *************


       // 로그인 버튼
	onLoginBtnClick(comp, info, e)
	{
        // 윈도우 옵션 객체
        let wnd = new AWindow();

            wnd.setWindowOption({
            isModal : true,
            isFocusLostClose : true,
            modalBgOption : 'light',
            isDraggable: true,
            isResizable: true
        });


        wnd.openCenter('Source/main/LoginModal.lay', null, 400, 340).then(() => {
        // 윈도우가 열리고 나서 실행할 코드
        });
	}

	

	
}

