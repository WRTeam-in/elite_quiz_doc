---
sidebar_position: 2
---

# App Changelogs

This page documents the version history and updates for the Elite Quiz Mobile application.

## Compatibility Table

| Product Version | Flutter version |
| --------------- | --------------- |
| v2.3.3          | v3.29.3         |
| v2.3.2          | v3.29.3         |
| v2.3.1          | v3.29.3         |
| v2.2.6          | v3.27.1         |
| v2.2.5          | v3.24.4         |
| v2.2.4          | v3.24.3         |
| v2.2.3          | v3.22.1         |
| v2.2.2          | v3.22.1         |
| v2.2.1          | v3.22.1         |
| v2.2.0          | v3.22.1         |
| v2.1.9          | v3.19.3         |
| v2.1.8          | v3.19.3         |
| v2.1.7          | v3.19.3         |
| v2.1.6          | v3.19.3         |
| v2.1.5          | v3.16.9         |
| v2.1.4          | v3.16.9         |
| v2.1.3          | v3.16.9         |
| v2.1.2          | v3.16.9         |
| v2.1.1          | v3.16.9         |
| v2.1.0          | v3.16.9         |
| v2.0.9.1        | v3.16.9         |
| v2.0.9          | v3.16.9         |
| v2.0.8          | v3.16.9         |
| v2.0.7          | v3.7.7          |
| v2.0.6          | v3.7.0          |
| v2.0.5          | v3.0.2          |
| v2.0.4          | v3.0.2          |
| v2.0.3          | v3.0.2          |
| v2.0.2          | v3.0.2          |
| v2.0.1          | v3.0.2          |
| v2.0.0          | v3.0.2          |
| v1.0.9          | v2.5.0          |
| v1.0.8          | v2.5.0          |
| v1.0.7          | v2.5.0          |
| v1.0.6          | v2.5.0          |
| v1.0.5          | v2.5.0          |
| v1.0.4          | v2.5.0          |
| v1.0.3          | v2.5.0          |
| v1.0.2          | v2.5.0          |
| v1.0.1          | v2.5.0          |
| v1.0.0          | v2.5.0          |

## v2.3.3 (27 May 2025)

```
Added: user can now preview the content of the Premium Categories before unlocking.
Added: Bumped dependencies to the latest versions.
Added: show Buy Coins in other places like battle and in not enough coins dialogs.
Added: brand specific configs are now in separate place, to make is easier to update the app in future
Improved: Many bug fixes, and improvements
Improved: code structure and consistency

Note: Please read the README.txt before proceeding with the update.
Note: Please use Flutter version 3.29.3 not the latest one.
```

## v2.3.2 (12 Apr 2025)

```
- Added: Latest flutter 3.29.2 compatibility
- Added: Latest Android Studio Meerkat compatibility.
- Added: Bumped dependencies to the latest versions.
- Added: "Hint deduct coins" in Guess The Word setting rather than using the "lifeline deduct coins" from quiz zone setting
- Fix: Badges Notification Translation issue.
- Fix: Multiple notifications coming together would override existing notification.
- Improved: Removed 2x coin & score gains from premium categories win.
- Improved: Many small fixes and improvements, small release big relief

Note: Please read the README.txt before proceeding with the update.
```

## v2.3.1 (13 Mar 2025)

```
- Added: New Quiz!! MultiMatch - Multiple Correct answers and Sequence options
- Added: Standardise Exam, Contest, and Daily Quiz availability across timezones
- Added: Bumped dependencies to the latest versions
- Fix: Coin credit in premium categories was not doubling
- Improved: Directionality RTL support
- Improved: App localisation
- Improved: Many small improvements that make a big difference

- Note: We have jumped from v2.2.6 to v2.3.1 directly to keep both app and web versions the same.
- Note: Please read the README.txt before proceeding with the update.
```

## v2.2.6 (4 Jan 2025)

```
- Added: Added PDFs to Fun'N'Learn comprehension
- Added: Added Youtube video to Fun'N'Learn comprehension
- Added: Added a "Buy Coins" button in the "Not Enough Coins" dialog.
- Added: Added images in questions for Fun'N'Learn
- Added: Bumped dependencies to the latest versions.
- Added: Compatibility with Xcode 16
- Added: Compatibility with the latest Flutter version (v3.27.1)
- Added: Reduced APK size by enabling native library extraction
- Added: Updated Gradle and Android dependencies
- Fixed: Fixed the Latex mode setting issue (previously affecting Maths Quiz)
- Fixed: Fixed the app loading issue when language mode is disabled
- Fixed: Fixed the issue where category details were still shown in the joining sheet (battle room) when category mode is disabled
- Fixed: Resolved the app translation updating issue
- Improved: Enhanced the UI for the top three ranks in the leaderboard.
- Improved: Refactored and cleaned up the code
- Improved: Refactored the app translation code

- Note: Please read the README.txt before proceeding with the update.
```

## v2.2.5 (12 Nov 2024)

```
- Added: option to set default Quiz and System Language from Admin Panel
- Added: rather than JSON, add/update translations directly from Admin Panel
- Added: Compatible with latest Flutter v3.24.4
- Added: Bump dependencies to latest versions
- Improved: optimize assets size
- Improved: refactoring and cleanup of code
- Fixed: "Guess The Word" icon was being removed when audio quiz was disabled on the home screen

- Note: use Android Studio version "Koala" for compatibility reasons for now
```

## v2.2.4 (24 Sept 2024)

```
- Added: Manage System Language from the Admin Panel for translations.
- Added: Show Notifications sent to Specific users in the notifications Screen in App.
- Added: Separate System (Translation) language from Quiz Language in App.
- Added: Move Bookmarks to Review Answers Section & show answers in bookmarks quiz
- Added: Bump dependencies to latest versions
- Added: Compatible with latest flutter v3.24.3
- Added: Updated firebase-php package in Admin Panel
- Fixed: Removed Firebase Crashlytics from the App
- Other Fixes and Improvements in App and Panel
```

## v2.2.3 (16 Aug 2024)

```
- Added: Subcategories are no longer premium. rip.
- Added: add Review Answer in Daily Quiz, True False & Self Challenge
- Added: bump dependencies to the latest versions
- Added: dynamic authentication methods
- Added: remove submitted answers from bookmarks.
- Fixed: GTW should also obey to the Answer Mode
- Fixed: Prevent excessive hint usage due to rapid button clicks
- Fixed: User coins not updating after purchasing the coins
- Fixed: Corrected question limits for 1v1 battles
- Fixed: already login dialog showing everytime when reopen the app
- Fixed: gesture going back not working even when IAP is not in progress
- Fixed: latex questions, options not showing correctly in Review Answers for daily, self-challenge, true false
- Fixed: reset submitted answers for bookmarked questions
- Fixed: review answers options flickering during latex loading
- Fixed: scrolling enabled for long notification messages in the bottom sheet
- Fixed: when playing the next level, any answer to the first question plays the wrong answer sound.
- Fixed: guess the word options are not shuffling
- Improved: cleanup - bookmark quiz screen
- Improved: remove commented code
- Improved: remove unused sound assets
- Improved: update README

Admin Panel:
- Added: Remove Premium From Subcategories
- Added: Add dynamic authentication methods
- Improved: API Changes
```

## v2.2.2 (5 Aug 2024)

```
- Added: Important announcement for Premium Subcategories for upcoming update.
- Improvement: Minimum one language to be present in the language setting.
- Fixed: Latex Questions Options cut-off issue.
```

## v2.2.1 (15 July 2024)

```
- Added: Made Latex Optional now for Quiz Zone and Exam Module
- Added: New UI for Battle Join room bottom sheet.
- Added: Basic firebase crashlytics and analytics
- Added: Default web settings and placeholders.
- Fixed: Battles create issues caused by simultaneously clicking the coin store button
- Improved: Contest Card UI and Notifications Screen UI
- Improved: Remove Image from Image Question in edit
- Improved: Removed unnecessary assets and files
- Improved: Update dependencies to the latest version
```

## v2.2.0 (5 June 2024)

```
- Added: bump support for flutter 3.22.1 latest version
- Fixed: don't show initial language selection screen when language mode is disabled
- Fixed: show notification icon for foreground notifications.
- Improved: Added support for new cloud messaging for firebase with http.
```

## v2.1.9 (28 May 2024)

```
- Added: Language selection screen before user onboards in the App.
- Added: Show room category and entry fee for joining area in battles, so user can better decide if they want to continue or exit the room.
- Added: In-App-Purchases are now verified and coins are given from the admin panel side. (IAP is now more robust and stable)
- Added: Track IAP purchases history and map transactions with user and play store/app store purchases. (Issue #19 addressed)
- Added: updated admin panel code to support PHP 8.2.

- Fix: spam IAP purchase issue, when purchasing one product gave coins multiple times.
- Fix: Reset old selected entry fee when opening create room sheet.
- Fix: Some times in some devices when creating account email, name were missing. we try to find details from firebase user if can't be found then it will be empty.
- Fix: battle sheets ui issue in small device sizes, create room button now showing.
- Fix: 1v1/random battle issue with IOS. exiting quiz from ios device froze the game for other users.
- Fix: Overflow issue in `resultScreen.dart` username (#4)
- Fix: Live contest title overflow (#5)
- Fix: show hours correctly in self challenge quiz.
- Fix: show contests in upcoming contests if they are scheduled for today but not yet have started (#8)
- Fix: In admin panel, in Guess The Word allows typing non english answers textfield.

- Improved: Show only numbers keyboard when battles room code generation is selected to be only numbers.
- Improved: In Contest, show start date for upcoming contests instead of players as players will be zero always. (#9)
- Improved: Correct padding on questions in Review Answers screen when horizontal scrolling the questions.
- Improved: Update Gradle version to 7.6.3
- Improved: Upgraded all the 3rd party packages.
- Improved: In Admin Panel, improved daily quiz screen
- Improved: Removed unused APIs code from admin panel side.
- Improved: Admin panel in login screen you can toggle password visibility and added code for remember me checkbox.
- Improved: other code refactoring and improvements.
```

## v2.1.8 (29 Apr 2024)

```
App side:
- Fix the GDPR consent dialog issue.
- Updated package dependencies to the latest
- Small fixes and improvements

Admin panel:
- Fix category order language filter the categories dropdown.
- Fix elite web APIs
- Fix the audio question update issue.
- Fix exam sample download file issue
- Other improvements.
```

## v2.1.7 (8 Apr 2024)

```
- Feat: badges are now language-wise
- Feat: add GDPR message for AdMob.
- Feat: added credit score and deducted score for the contest
- Refactor: separate the app logo and splash logo in the code and remove default colors for both.
- Refactor: update gradle version to 7.6
- Fix: ios display name issue on first-time login
- Fix: in-app purchase multiple buy bug fix.
- Fix: IOS added additional info for PrivacyInfo.
- Fix: hide skip lifeline when there is exactly one question.
- Fix: remove 'remove ads' after purchase is successful
- Fix: remove ads re-buy issue from new account
- Fix: spam clicking on IAP opens many payment sheets.
- Fix: show compact numbers for user achievement
- Fix: IAP purchase spam purchases issue
- Fix: no display name on first apple login
- Chore(readme): fix a spelling mistake in signing the report command
```

## v2.1.6 (20 Mar 2024)

```
- Added: Add Compatibility with the latest flutter version (3.19.3).
- Added: Added new IOS privacy API use reasons. (PrivacyInfo.xcprivacy)
- Added: Added functionality for users to cancel their redemption requests. (in Wallet feat.)
- Improved: Improved flexibility by moving app constants to the admin panel & new options.
- Added: Exam Rank Filter (Admin Panel)
- Remove: Removed access_key (not required) & user_id (got from the token) from Apis. (App, Panel)

Note: Must Read README.txt provided with the app code before updating.
```

## v2.1.5 (14 Feb 2024)

```
- Improved: Compatibility with the latest Flutter version (3.16.9) and Material 3
- Fixed: Battle room fixes, related to joining and room being deleted
- Fixed: Self-challenge fixes, timer being reset on question change
- Fixed: Many small fixes (IOS status bar color, daily watch ads fix, email validation, html content color, badges greyscale in dark mode, bookmarks)
- Fixed: Removed deprecated package launcher_review
- Cleanup: Major code cleanup (context.tr for translations, removed unused animations, etc)
- Fixed: Exclude skipped questions from result
- Added: Added short video docs in documentation provided with the code.
- Fixed: Resolved IOS Keyboard Stuck issue.

Admin Panel Changelog:
- Fixed: Table responsive for mobile view
- Fixed: Leaderboard APIs in APIs
- Fixed: Language Update Data Fixed
- Added: Slug for Category and Subcategory
- Added: Latex support in Question Report
- Fixed: Other minor fixes
```

## v2.1.4 (11 Dec 2023)

```
- Added: Change Quiz Zone Mode Visibility from Admin Panel.
- Added: Interactive Images For Questions (Zoom and Pan Images) in App.
- Added: Show Right Answer on Answer Submission.
- Added: Contest Quiz: Award more points to users who answer correctly and quickly.
- Added: Latex Support Added in Quiz zone, Bookmarks, 1v1 Battle, Group Battle, Self Challenge, Daily Quiz and Exam Module.
- Added: Chart improvements for dashboard in Admin Panel
- Added: Now Set primary theme for your Admin Panel.
- Added: Change the Footer Copyright info in Admin Panel.
- Added: Options shuffle from API side.
- Added: Refactored System Configuration Code In App.
- Improvement: Documentation Improvements.
- Improvement: Bug fixes & Improvements.
```

## v2.1.3 (1 Nov 2023)

```
- Added: the functionality to incorporate Non Supported Languages directly from the Admin Panel.
- Added: Easily customize notifications like "You have earned new badge" without touching the codebase!
- Added: We've lifted the English language restriction in Guess the Word. While Other languages are available, only english language is within the scope of support.
- Added: Introducing Daily Watch Ads! Users earn coins by watching daily ads in Home Screen. To use Lifelines, they can choose to watch ads or spend coins, with customizable options set by admin.
- Added: App Now fully compatible with iOS 17!
- Resolved: Error Codes Conflict and integrated usage improvements in the app.
- Fixed: Statistics Pie Chart in the App!
- Added: Pressing back in the login screen now takes you back to the home screen in guest mode.
- Cleaned: Cleaned up the Review Answers Screen, Category Screen, Subcategory Screen for Performance.
- Added: missing translation labels.
- Added: Google Login in iOS.
```

## v2.1.2 (21 Sep 2023)

```
- Added: 1v1 Battles with Bots: No opponent? No problem! Battle out AI bots for non-stop gaming fun!
- Added: Premium Quiz Categories: Elevate your quiz game with Premium Categories and Subcategories, available in all the quizzes!.
- Added: Apple Login Upgrade: We've migrated to the sign_in_with_apple package for secure Apple login.
- Added: App Optimization: Trimmed down app size by removing unused packages and code.
- Added: Code Refinement: Cleaner and more efficient codebase.

Admin Panel Specific:
- Added: Premium Quiz Categories: Create and edit premium categories/subcategories.
- Added: Revamped Login Page Design Experience: Customize it with Your Own Background Image for a Unique Touch.
- Added: Custom Bot Image: Personalize your Bot's look easily from the Admin Panel!
- Added: Reinforced Security: We've brought back the JWT Key input for enhanced security within the admin panel.
```

## v2.1.1 (9 Aug 2023)

```
- Added: Set Currency Symbol from Admin Panel (Setting > Payment Settings)
- Added: Functionality to Add/Edit In-App Purchase Products from Admin Panel. (Setting > Coin Store Settings)
- Improved: Improvements & bug fixes
```

## v2.1.0 (24 July 2023)

```
- Added: Remove Ads Using In-App Purchase.
- Updated: App SDK version from 19 to 21.
- Updated: App from Java to Kotlin Version.
- Updated: SVG supported in user profile.
- Updated: Result Screen (varied messages based on user score percentage)
- Improved: Improvements & bug fixes
```

## v2.0.9.1 (27 June 2023)

```
- Added: Full adobe XD UI Design
```

## v2.0.9 (20 June 2023)

```
- Added: New Battle UI
- Updated: Update Contest Distribute Prize-list
- Updated: Battle Coin management
- Updated: Updated Latest Library
- Improved: Improvements & bug fixes
```

## v2.0.8 (20 May 2023)

```
- Added: New Massive UI
- Added: Dynamic timer
- Added: Dynamic Random Battle Entry Fees
- Updated: Updated Latest Library
- Improved: UI level Improvements & Bug fixes
```

## v2.0.7 (21 Mar 2023)

```
- Updated: Upgrade to Flutter version 3.7.7
- Improved: Added new UI
- Improved: UI & Code Improvements
```

## v2.0.6 (2 Feb 2023)

```
- Added: Guest mode
- Added: True|False Quiz
- Added: disable/enable True|False Quiz from Admin panel
- Updated: Compatible with Flutter 3.7.0
- Improved: UI Improvement
- Fixed: Improvements & bug fixes
```

## v2.0.5 (4 Nov 2022)

```
- Added: New Ui and Theme Implemented
- Added: Enable / Disable Battle from Admin panel
- Added: All Quiz Timer Dynamic from Admin panel
- Added: Score, Coin Dynamic from Admin panel
- Added: Admin can give coins to the user from Admin panel
- Improved: Improvements and issues fixed
```

## v2.0.4 (1 Aug 2022)

```
- Added: Unity Ads
- Fixed: iOS 15 Profile issue solved
- Improved: UI Improvement
```

## v2.0.3 (21 June 2022)

```
- Added: Compatible with Flutter 3.0.2
- Added: More Ads
- Improved: Minor Design change
- Improved: Improve app performance
- Added: disable/enable math quiz from admin panel
```

## v2.0.2 (16 June 2022)

```
- Added: disable/enable math quiz from admin panel
```

## v2.0.1 (2 May 2022)

```
- Added: match/chemistry/LaTeX support formula
- Improved: Optimized app performance
```

## v2.0.0 (16 Mar 2022)

```
- Improved: Improved security and performance of app
```

## v1.0.9 (19 Feb 2022)

```
- Added: restriction to log in one device per account
- Added: Allow space in guess the word answer
- Improved: Improve app performance & design
```

## v1.0.8 (11 Jan 2022)

```
- Added: earning modules
- Added: option to delete user account
- Added: bookmark guess the word and audio questions
- Updated: Update quiz play area ui
```

## v1.0.7 (19 Dec 2021)

```
- Added: Badges and rewards
- Added: Manage ads from admin panel
- Added: Audio questions
```

## v1.0.6 (15 Nov 2021)

```
- Added: Badges and rewards
- Added: Manage ads from admin panel
- Added: Audio questions
```

## v1.0.5 (19 Oct 2021)

```
- Added: Enable chat option in a group battle
- Added: Now play battle with your friend like playing with random
- Added: Introduced coins system in 1 vs 1 battle.
- Added: Force update dialogue to continue over the old version (manage from admin panel)
```

## v1.0.4 (1 Oct 2021)

```
- Added: coin store (in-app purchase)
- Added: Light/Dark theme option
- Added: chat message with in 1vs1 battle
- Added: notification feature
- Added: functionality to filter question by category/subcategory with guess the word module
- Added: functionality to filter question by category/subcategory with fun N learn quiz module
- Fixed: Bug fixes & major improvements
```

## v1.0.3 (13 Sep 2021)

```
- Added: Compatible with flutter 2.5
```

## v1.0.2 (9 Sep 2021)

```
- Added: points system in 1 vs 1 battle.
- Added: New points system is following
  - If user submit the answer with in 1 or 2 seconds will earn 10 extra points + default Points (for correct answer)
  - If user submit the answer with in 3 or 4 seconds will earn 5 extra points + default Points (for correct answer)
  - If user submit the answer after 5 seconds will earn default points (for a correct answer)
- Fixed: account active/deactivate issue
- Fixed: group battle UX and unable to move to result in screen issue
```

## v1.0.1 (1 Sep 2021)

```
- Fixed: Bug fixed: sign up flow
- Added: avatar screen when updating profile picture
- Improved: Improved 1 vs1 battle mode
- Fixed: Bug fixes and improvements.
```

## v1.0.0 (25 Aug 2021)

```
- Added: Initial version released.
```
