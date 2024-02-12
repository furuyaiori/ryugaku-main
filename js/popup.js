/*
        離脱防止ポップアップ(JavaScript)
        */

        /*
        ポップアップを表示する関数
        */
        function showPopup() {
            document.getElementById('popup').style.display = 'block';
            }
    
            /*
            ポップアップを閉じる関数
            */
            function closePopup() {
            document.getElementById('popup').style.display = 'none';
            }
    
            /*
            特定のdiv要素(<div id="popup-target"></div>)に到達したらポップアップを表示
            */
            window.addEventListener('scroll', function() {
            var targetDiv = document.getElementById('popup-target');
            var targetPosition = targetDiv.getBoundingClientRect().top + window.scrollY;
            var scrollPosition = window.scrollY;
    
            if (scrollPosition >= targetPosition) {
                showPopup();
                window.removeEventListener('scroll', arguments.callee);
            }
            });
    
            /*
            ブラウザの戻るボタンを押すとポップアップを表示
            */
            // 履歴エントリを追加
            history.pushState({ page: 1 }, "title 1", "");
    
            // ブラウザの戻るボタンの検知
            window.onpopstate = function(event) {
            showPopup();
            };
    
            //ポップアップを閉じる
            document.addEventListener('DOMContentLoaded', function() {
                var closeButton = document.getElementById('popup-close');
    
                closeButton.addEventListener('click', function() {
                    closePopup();
                    // ポップアップが閉じられたら履歴を元に戻す
                    history.pushState(null, null, window.location.href.split("?")[0]);
                });
            });