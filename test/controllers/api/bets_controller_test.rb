require 'test_helper'

class Api::BetsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_bets_index_url
    assert_response :success
  end

  test "should get show" do
    get api_bets_show_url
    assert_response :success
  end

  test "should get create" do
    get api_bets_create_url
    assert_response :success
  end

  test "should get update" do
    get api_bets_update_url
    assert_response :success
  end

  test "should get delete" do
    get api_bets_delete_url
    assert_response :success
  end

end
